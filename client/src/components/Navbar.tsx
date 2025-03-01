import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import Auth from "../utils/auth";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());

  useEffect(() => {
    setIsLoggedIn(Auth.loggedIn());
  }, []);

  const handleLogout = () => {
    Auth.logout(); // Ahora ya no debería dar error
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">Kanban Board</Link>
      <div className="navbar-buttons">
        <Link to="/create-ticket" className="btn">New Ticket</Link>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="btn">Logout</button>
        ) : (
          <Link to="/login" className="btn">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
