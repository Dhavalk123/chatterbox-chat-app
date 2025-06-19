# 💬 ChatterBox

**ChatterBox** is a real-time group chat application built with Node.js, Express, and Socket.IO.  
It allows users to register, log in, and chat instantly with others in a shared room — all through a simple, clean, and responsive interface.

---

## 🚀 Features

- 🔐 User Registration & Login
- 💬 Real-time messaging with Socket.IO
- 😀 Emoji support
- 🧑‍🤝‍🧑 Username display in chat
- 🎨 Attractive and centered UI design
- 📦 File-based user storage (`users.json`)

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Real-time**: Socket.IO
- **Storage**: JSON file (for user data)

---

## 📸 Screenshots

### 🔐 Login Page
![Login Page](screenshots/login-page.png)

### 📝 Register Page
![Register Page](screenshots/register-page.png)

### 💬 Chat Interface
![Chat Interface](screenshots/chat-ui.png)

---

## 📁 Folder Structure
chat-app/
│
├── client/                         # Frontend files (HTML, CSS, JS)
│   ├── index.html                  # Chat page
│   ├── login.html                  # Login page
│   ├── register.html               # Register page
│   └── style.css                   # Styling for all pages
│
├── screenshots/                    # (Optional) Screenshots for README
│   ├── login-page.png
│   ├── register-page.png
│   └── chat-ui.png
│
├── users.json                      # Stores registered users
├── index.js                        # Main Node.js server (Express + Socket.IO)
├── package.json                    # NPM metadata and dependencies
├── .gitignore                      # To ignore node_modules, etc.
└── README.md                       # Project description and info

