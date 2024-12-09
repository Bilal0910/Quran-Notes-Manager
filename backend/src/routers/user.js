const express = require("express");
const router = new express.Router();
const multer = require("multer");
const auth = require("../middleware/auth");
const sharp = require("sharp");
const User = require("../models/user");
const Task = require("../models/task");
const { sendWelcomeEmail, sendCancelationEmail } = require("../emails/account");

// Create users endpoint API
router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    sendWelcomeEmail(user.email, user.name);
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

// Login users endpoint API
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

// Logout users from a single device endpoint API
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

//logout users from all devices endpoint API
router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

// Fetch user endpoint API
router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});

// Update individual user by id endpoint API
router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    updates.forEach((update) => {
      req.user[update] = req.body[update];
    });
    await req.user.save();

    res.send(req.user);
  } catch (e) {
    if (e.name === "ValidationError") {
      return res.status(400).send(e);
    }

    res.status(500).send();
  }
});

// Delete individual user endpoint API
router.delete("/users/me", auth, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user._id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    // Delete all tasks associated with the user
    await Task.deleteMany({ owner: user._id });
    sendCancelationEmail(user.email, user.name);

    res.send(user);
  } catch (e) {
    res.status(500).send({ error: "Server error" });
  }
});

// Multer middleware
const upload = multer({
  limits: {
    filesize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image"));
    }

    cb(undefined, true);
  },
});

// post user avatar endpoint API
router.post("/users/me/avatar", auth, upload.single("avatar"), async (req, res) => {
  const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
  req.user.avatar = buffer;
  await req.user.save();
  res.send(),
    (err, req, res, next) => {
      res.status(400).send({ error: err.message });
    };
});

// Delete user avatar endpoint API
router.delete("/users/me/avatar", auth, async (req, res) => {
  req.user.avatar = undefined;
  await req.user.save();
  res.send();
});

// Get user avatar endpoint API
router.get("/users/:id/avatar", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user || !user.avatar) {
      throw new Error();
    }

    res.set("Content-Type", "image/png");
    res.send(user.avatar);
  } catch (e) {
    res.status(404).send();
  }
})

module.exports = router;
