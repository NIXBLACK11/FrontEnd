# FrontEnd

This React application serves as the front end for interacting with the backend API, providing user authentication and navigation between different views.

### Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Chakra UI**: Component library for React applications.
- **React Router**: Declarative routing for React applications.

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/NIXBLACK11/FrontEnd.git
   ```

2. Navigate to the `frontend` directory:

   ```
   cd frontend
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

### Application Structure

- **`App.js`**: Main component of the application, handles routing using React Router.
- **`routes/` Directory**: Contains individual route components for different views.
- **`Signin.js`**: Component for user sign-in.
- **`Home.js`**: Component for the home page.
- **`Signup.js`**: Component for user sign-up.
- **`User.js`**: Component for displaying user details.
- **`components/` Directory**: Contains reusable UI components used across different views.

### Routing

Routing in the application is managed using React Router. Here are the defined routes:

- **`/`**: Sign-in page.
- **`/home`**: Home page after user authentication.
- **`/signup`**: Sign-up page.
- **`/user/:userName`**: User profile page, displaying details for a specific user.

### User Authentication

User authentication is handled through the backend API. Upon successful authentication, users are redirected to the home page (`/home`). Unauthorized users are redirected to the sign-in page (`/`).

### Customization

Feel free to customize the application according to your requirements. You can modify existing components, add new routes, or integrate additional libraries as needed.

### Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.