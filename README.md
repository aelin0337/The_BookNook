Online Book Store — Web Application 
Course: Advanced Databases (NoSQL) 
Project Type: Web Application (Frontend + Backend) 
Team 2 students 
Astana IT University 
Group: BDA_2409 
Students: Aelina Mereliyeva & Nazar Nurzhankyzy  

Project Description 

This project is a full-stack web application for an online bookstore. 
Users can browse books, view detailed information, add items to a cart, register and log in, and place orders. 
Administrators have access to an admin panel where they can manage users, books, and orders. 

The application is built using Node.js, Express, MongoDB, and a vanilla JavaScript frontend. 

Application Architecture 
The project follows a classic client–server architecture: 
Frontend: HTML, CSS, JavaScript 
Backend: Node.js + Express 
Database: MongoDB (NoSQL) 
Authentication: JWT (JSON Web Token) 
Data exchange: REST API (JSON) 

Frontend (Browser) 
   ↓ HTTP requests (REST API) 
Backend (Express.js) 
   ↓ 
MongoDB Database 

Project Structure 
backend.new/ 
- config/db.js 
- controllers/bookController.js, genreController.js, orderController.js, reviewController.js, userController.js 
- data/books.json, genres.json, orders.json, reviews.json, users.json 
- middleware/authMiddleware.js 
- models/Book.js, Genre.js, Order.js, Review.js, User.js 
- routes/books.js, genres.js, orders.js, reviews.js, users.js 
- index.js 
- package.json 
- .env 
frontend/ 
- css/style.css, profile.css 
- images/logo.jpg 
- js/admin.js, api.js, book.js, cart.js, index.js, login.js, orders.js, profile.js, register.js, shop.js 
- admin.html, book.html, cart.html, index.html, login.html, orders.html, profile.html, register.html, shop.html 

Backend Overview 
Models 
User – name, email, password, role (user/admin) 
Book – title, author, price, stock, genre, description, cover image 
Genre – genre name 
Order – user, items, total amount, status, date 
Review – user reviews for books 
Middleware 
authMiddleware
JWT authentication 
Role-based access control (admin-only routes) 

Controllers 
Each controller handles business logic: 
books, genres, orders, users, reviews 

Routes 
REST API endpoints: 
/api/books 
/api/genres 
/api/orders 
/api/users 
Frontend Overview 

Main Pages 
Home page – list of all books 
Shop page – books with genre filtering 
Book details page – detailed book information 
Cart page – client-side shopping cart 
Orders page – user order history 
Profile page – user information 
Admin panel – user, order, and book management 
State Management 

localStorage is used for: 
JWT token 
User role 
Shopping cart data 
API Communication 

All frontend requests go through a single helper: 
api.js 

It handles: 
HTTP requests 
JSON parsing 
Authorization headers 
Error handling 

Authentication & Authorization 
Users authenticate using email and password 
Backend issues a JWT token 
Token is stored in localStorage 
Protected routes require a valid token 
Admin-only functionality is restricted by role 
Shopping Cart Logic 
Cart is stored entirely on the client side 

Users can: 
Add books 
Change quantity 
Remove items 
Total price is calculated dynamically 
Checkout clears the cart and simulates order placement 

Database 

MongoDB is used as the NoSQL database 
Initial data can be loaded from JSON files 

Collections: 
users 
books 
genres 
orders 
reviews 

How to Run the Project 

Backend 

cd backend.new 
npm install 
npm run dev 
 

Frontend 
Open login.html using Live Server or any static server. 

Features Summary 
User registration and login 
Role-based access (user / admin) 
Book catalog with filtering 
Shopping cart 
Order management 
Admin dashboard 

RESTful API 
MongoDB NoSQL database 

Conclusion 

This project demonstrates a complete full-stack web application using NoSQL databases, REST API principles, authentication, and role-based authorization. 
It satisfies all requirements of the Advanced Databases (NoSQL) course. 
