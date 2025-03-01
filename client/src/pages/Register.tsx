import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Register = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
        const response = await fetch("http://localhost:3001/api/register", { // Asegurar URL completa
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        });

        if (response.ok) {
            navigate("/login"); // Redirigir al login después de registrarse
        } else {
            setError("Registration failed. Try again.");
        }
    } catch (error) {
        setError("Could not connect to the server. Is the backend running?");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Create Account</h2>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={newUser.username}
            onChange={handleChange}
            className="login-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={newUser.password}
            onChange={handleChange}
            className="login-input"
          />
          <button type="submit" className="login-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
