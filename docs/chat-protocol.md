<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Register</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

    body, html {
      height: 100%;
      background-color: #f2f2f2;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .form-container {
      background: #fff;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 400px;
    }

    h2 {
      text-align: center;
      margin-bottom: 25px;
      color: #333;
      font-weight: 600;
    }

    label {
      display: block;
      margin-bottom: 6px;
      color: #444;
      font-weight: 500;
    }

    input {
      width: 100%;
      padding: 10px 14px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 15px;
    }

    input:focus {
      border-color: #4b7bec;
      outline: none;
      box-shadow: 0 0 3px rgba(75, 123, 236, 0.3);
    }

    button {
      width: 100%;
      padding: 12px;
      background-color: #4b7bec;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #3867d6;
    }

    .note {
      text-align: center;
      margin-top: 15px;
      font-size: 14px;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="form-container">
    <h2>Register</h2>
    <form id="registerForm">
      <label for="username">Username</label>
      <input type="text" id="username" required />

      <label for="password">Password</label>
      <input type="password" id="password" required />

      <button type="submit">Register</button>
      <div class="note">Already have an account? <a href="#">Login</a></div>
    </form>
  </div>

  <script>
    document.getElementById("registerForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const res = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      alert(res.ok ? "✅ " + data.message : "❌ " + data.error);
    });
  </script>
</body>
</html>
