import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send login credentials to the server
    // ...

    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
      <label>Email:</label>

      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label>Password:</label>

      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
