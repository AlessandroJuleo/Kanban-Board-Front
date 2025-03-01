import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Importar Navbar
import Home from "./pages/Home"; // Asegurar que la página de inicio es la correcta
import Board from "./pages/Board";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateTicket from "./pages/CreateTicket";
import EditTicket from "./pages/EditTicket";
import ErrorPage from "./pages/ErrorPage";


function App() {
  return (
    <>
      <Navbar /> {/* Navbar fijo en toda la aplicación */}
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/board" element={<Board />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register/>} />
  <Route path="/create-ticket" element={<CreateTicket />} />
  <Route path="/edit-ticket" element={<EditTicket />} />
  <Route path="*" element={<ErrorPage />} />
</Routes>

    </>
  );
}

export default App;
