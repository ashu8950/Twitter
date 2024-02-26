import React from 'react';
import "../auth/Register.css";

const Register = () => {
  return (
    <form action="/register" method="post">
      <h1>User Registration</h1>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" required autoFocus />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required />
      <button type="submit">Register</button>
      <p>Already have an account? <a href="/login">Login here</a></p>
    </form>
  );
};

export default Register;

