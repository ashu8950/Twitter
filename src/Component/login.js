import React from 'react';
import "../auth/Login.css";

const Login = () => {
  return (
    <form action="/login" method="post">
      <h1>User Login</h1>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" required autoFocus />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required />
      <button type="submit">Login</button>
      <p>Don't have an account? <a href="/register">Register here</a></p>
    </form>
  );
};

export default Login;


