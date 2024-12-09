import React, { useState } from "react";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ noteData, type, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  const [error, setError] = useState(null);

  //Add Note
  const addNewNote = async () => {};

  //Edit Note
  const editNote = async () => {};


  const handleAddNote = () => {
    if (!title) {
      setError("Please enter the title.");
      return;
    }

    if (!content) {
      setError("Please enter the content.");
      return;
    }
    setError("");

    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div className="relative">
      <button
        onClick={onClose}
        className="w-6 h-6 rounded-full transition-all ease-in-out flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-200 "
      >
        <MdClose className="text-lg text-slate-400 hover:text-slate-800 " />
      </button>
      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          className="text-xl text-slate-700 outline-none p-1 rounded-lg"
          placeholder="Add Title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">CONTENT</label>
        <textarea
          type="text"
          className="text-sm text-slate-950 bg-slate-300 rounded p-2 outline-none"
          placeholder="Content"
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        ></textarea>
      </div>

      <div className="mt-3">
        <label className="input-label">TAGS</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && <p className="text-red-600 text-xs pt-4">{error}</p>}

      <button
        className="btn-primary font-medium mt-5 p-3 transition-all ease-in-out"
        onClick={handleAddNote}
      >
        ADD NOTE
      </button>
    </div>
  );
};

export default AddEditNotes;
