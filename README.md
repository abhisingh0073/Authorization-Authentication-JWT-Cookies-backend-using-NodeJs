# 🔐 Authentication & Authorization Backend
### JWT + Cookies + Node.js + Express + MongoDB

This project is a backend authentication and authorization system built using **Node.js**, **Express**, **MongoDB**, **JWT**, **bcrypt**, and **HTTP-only cookies**.  
It provides secure user signup and login functionality with token-based authentication.

---

## 🚀 Features

- User Signup
- User Login
- Password hashing using bcrypt
- JWT token generation
- Authentication using HTTP-only cookies
- MongoDB integration with Mongoose
- Environment variable support using dotenv
- Clean and modular folder structure

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- dotenv
- cookie-parser
- nodemon

---

## 📁 Project Structure

<img width="270" height="474" alt="image" src="https://github.com/user-attachments/assets/2acac7ac-cb1c-498d-b4b5-b9df7e57ee32" />

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

PORT=5000
mongoodburl=mongodb://localhost:27017/mindpost

git clone https://github.com/abhisingh0073/Authorization-Authentication-JWT-Cookies-backend-using-NodeJs.git


Navigate to the project directory:



cd backend


Install dependencies:express, MongoDB, bcrypt, jsonwebtoken, dotenv, cookie-parser



npm install


Start the development server:



npm run dev


Server will run at:



http://localhost:5000


---

## 🔑 API Endpoints

### 📝 Signup



POST /user/signup


Request Body:

```json
{
  "name": "Abhishek",
  "email": "abhishek@gmail.com",
  "password": "123456"
}
```


Password is hashed using bcrypt

JWT is generated

JWT is stored in an HTTP-only cookie

🔐 Login
POST /user/login


Request Body:
```
{
  "email": "abhishek@gmail.com",
  "password": "123456"
}
```

Password is verified

JWT is generated

JWT is stored in an HTTP-only cookie

🍪 Cookie-Based Authentication

JWT is stored in an HTTP-only cookie named mindpost.
```
res.cookie("mindpost", token, {
  httpOnly: true,
  secure: false,
  sameSite: "strict",
  maxAge: 7 * 24 * 60 * 60 * 1000,
});
```

This helps protect against XSS attacks.

🔐 Authentication Flow

User signs up or logs in

Password is hashed and verified

JWT token is generated

Token is stored in an HTTP-only cookie

Cookie is sent automatically with every request

🧠 Best Practices Used

Environment variables for secrets

Password hashing

JWT-based authentication

HTTP-only cookies

Modular and scalable architecture

Clean separation of concerns

🧪 Scripts
```
npm run dev
npm start
```
📌 Future Enhancements

Logout functionality

Protected routes

Role-based authorization

Refresh tokens

Frontend integration

CSRF protection

👨‍💻 Author

Abhishek Kumar Singh

GitHub: https://github.com/abhisingh0073

⭐ Support

If you like this project, please ⭐ star the repository.




