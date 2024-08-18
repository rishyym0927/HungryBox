<h1 align = "center"> HungryBox </h1>

## Live Website
Check out the Live Website here: [HungryBox](https://hungrybox-frontend.onrender.com/)

## Introduction
HungryBox is a Tiffin Delivery Service Platform built with the MERN stack (MongoDB, Express.js, React, Node.js) and integrated with Stripe for secure payment processing. This project provides a comprehensive solution for managing tiffin orders, user accounts, and administrative tasks.

## Features
### User Features:
- **Browse Menu**: Users can view available tiffin plans, menu items, and pricing.
- **Order Placement**: Users can place their tiffin orders.
- **Secure Payment**: Integration with Stripe for secure and seamless payment processing.
- **Order History**: Users can view their past orders and track current ones.
- **Profile Management**: Users can create and update their profile information.
- **Responsive Design**: The frontend is responsive and works on both desktop and mobile devices.

### Admin Features:
- **Dashboard**: Admins have access to an intuitive dashboard for managing orders, users, and menu items.
- **Order Management**: Admins can view, update, and process orders.
- **Menu Management**: Admins can add, update, or remove menu items and tiffin plans.

### Backend Features:
- **API Endpoints**: RESTful API endpoints for handling user authentication, order processing, and menu management.
- **Database Integration**: MongoDB is used for storing user data, orders, and menu items.
- **Stripe Integration**: Secure payment processing through the Stripe API.
- **Authentication**: User authentication and authorization with JWT (JSON Web Tokens).

## Project Structure
The project is organized into three main folders:

- **`admin`:** Contains the admin panel code, which includes the dashboard and management interfaces.
- **`frontend`:** The React frontend application, responsible for the user interface and user experience.
- **`backend`:** The Node.js and Express.js backend, which handles API requests, database interactions, and server-side logic.

## Getting Started
To get started with HungryBox, follow these steps:

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB server running locally or accessible through a cloud service.
- Stripe account for payment processing.

### Installation
1. **Clone the repository:**
   
   ```bash
   git clone https://github.com/your-username/hungrybox.git
   cd hungrybox

2. **Backend**
  - Navigate to the backend directory:
   
    ```bash
    cd backend     
  - Create a .env file in the backend directory with the following variables:
    
    ```bash
    MONGO_URI=your-mongodb-connection-string
    STRIPE_SECRET_KEY=your-stripe-secret-key
    JWT_SECRET=your-jwt-secret
  - Install the required npm packages:

    ```bash
    npm install
  - Start the backend server:

    ```bash
    npm run server

3. **Frontend**
  - Navigate to the frontend directory:

    ```bash
    cd ../frontend
  - Install the required npm packages:

    ```bash
    npm install
  - Start the frontend application:

    ```bash
    npm start
    
4. **Admin**
  - Navigate to the admin directory:

    ```bash
    cd ../admin
  - Install the required npm packages:

    ```bash
    npm install
  - Start the admin application:

    ```bash
    npm run dev

## Troubleshooting
If you encounter any issues during the setup, please check the following:
- Ensure MongoDB is running and accessible.
- Verify your Stripe credentials and environment variables are correctly set.
- Check the console output for any error messages and refer to them for troubleshooting.

## Contributing
Contributions are welcome! If you have suggestions or improvements, please follow these steps:

1. **Fork the repository.**

2. **Create a new branch:**

   ```bash
   git checkout -b feature-branch
3. **Commit your changes:**

    ```bash
   git commit -am 'Add new feature'
4. **Push to the branch:**

   ```bash
   git push origin feature-branch

5. **Open a Pull Request.**

## Show some ❤️
If you like this project, please give it a ⭐ on [Github](https://github.com/Mahak008/HungryBox)
