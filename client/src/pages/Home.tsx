import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="page-container">  {/* Asegurar que toma el fondo correcto */}
      <h1>Login to create & view tickets</h1>
      <Link to="/login" className="home-button">Go to Login</Link>
    </div>
  );
};

export default Home;
