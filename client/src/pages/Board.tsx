import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Board.css";

const Board = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Función para manejar login/logout
  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // Función para crear un nuevo ticket
  const handleNewTicket = () => {
    navigate("/create-ticket");
  };

  // Función para editar un ticket
  const handleEdit = () => {
    navigate("/edit-ticket");
  };

  // Función para eliminar un ticket (simulado)
  const handleDelete = (ticketId: number) => {
    console.log(`Ticket con ID ${ticketId} eliminado`);
    alert(`Ticket ${ticketId} eliminado correctamente`);
  };

  return (
    <div className="board-container">
      {/* Botón de autenticación */}
      <button className="auth-btn" onClick={handleAuth}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {/* Botón para crear un nuevo ticket */}
      <button className="new-ticket-btn" onClick={handleNewTicket}>
        New Ticket
      </button>

      <div className="kanban-board">
        <div className="kanban-column todo">
          <h2>Todo</h2>
          <div className="task-card">
            <h3>Test the API</h3>
            <p>Test the API using Insomnia.</p>
            <p><b>JollyGuru</b></p>
            <button className="edit-btn" onClick={handleEdit}>Edit</button>
            <button className="delete-btn" onClick={() => handleDelete(1)}>Delete</button>
          </div>
        </div>

        <div className="kanban-column inprogress">
          <h2>In Progress</h2>
          <div className="task-card">
            <h3>Implement authentication</h3>
            <p>Set up user authentication using JWT tokens.</p>
            <p><b>JollyGuru</b></p>
            <button className="edit-btn" onClick={handleEdit}>Edit</button>
            <button className="delete-btn" onClick={() => handleDelete(2)}>Delete</button>
          </div>
        </div>

        <div className="kanban-column done">
          <h2>Done</h2>
          <div className="task-card">
            <h3>Set up project repository</h3>
            <p>Create a new repository on GitHub and initialize it with a README file.</p>
            <p><b>RadiantComet</b></p>
            <button className="edit-btn" onClick={handleEdit}>Edit</button>
            <button className="delete-btn" onClick={() => handleDelete(3)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
