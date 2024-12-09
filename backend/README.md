# Quran-Notes-Manager


Quran Notes App
A web-based Quran Notes app to help users add, manage, and track notes related to their Quranic studies. The app allows users to create an account, authenticate, and store their notes for various Surahs and Ayahs. All data is securely stored in a MongoDB database.

Table of Contents
Project Overview
Features
Technologies Used
Setup and Installation
API Endpoints
Authentication
User Endpoints
Note Endpoints
Environment Variables
Testing
Contributing
License
Project Overview
The Quran Notes app is designed to allow users to maintain notes for their Quranic studies. It provides secure authentication, note creation, reading, updating, and deletion features, ensuring a seamless user experience.

Features
User Authentication: Sign up, login, and logout functionality.
JWT Authentication: Secure user login using JWT tokens.
CRUD Operations for Notes: Create, read, update, and delete notes for each Surah or Ayah.
File Upload: Users can upload avatars or images.
Data Storage: All notes are stored in a MongoDB database.
Security: Password encryption using bcryptjs.
Technologies Used
Node.js: JavaScript runtime for server-side development.
Express: Web framework for Node.js to build RESTful APIs.
MongoDB: NoSQL database for storing user data and notes.
Mongoose: ODM for MongoDB to model the data.
JWT: JSON Web Token for user authentication.
Bcryptjs: Library for hashing and comparing passwords.
Multer: Middleware for handling file uploads.
SendGrid: Email service for sending welcome emails upon user registration.