import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTicket } from '../api/ticketAPI';
import { TicketData } from '../interfaces/TicketData';
import { UserData } from '../interfaces/UserData';
import { retrieveUsers } from '../api/userAPI';
import "../styles/CreateTicket.css";

const CreateTicket = () => {
  const [newTicket, setNewTicket] = useState<TicketData>({
    id: 0,
    name: '',
    description: '',
    status: 'Todo',
    assignedUserId: 1,
    assignedUser: null
  });

  const navigate = useNavigate();
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const data = await retrieveUsers();
        if (data.length > 0) {
          setUsers(data);
          setNewTicket((prev) => ({ ...prev, assignedUserId: data[0].id })); // 🔹 Selecciona el primer usuario por defecto
        }
      } catch (err) {
        console.error('Failed to retrieve user info', err);
      }
    };
    getAllUsers();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewTicket((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!newTicket.name || !newTicket.description) {
      alert("Please fill in all fields");
      return;
    }
    await createTicket(newTicket);
    navigate('/');
  };

  return (
    <div className='page-container'>
      <div className='form-container'>
        <h1>Create Ticket</h1>
        <form onSubmit={handleSubmit}>
          <label>Ticket Name</label>
          <input type='text' name='name' value={newTicket.name || ''} onChange={handleChange} />

          <label>Ticket Status</label>
          <select name='status' value={newTicket.status || 'Todo'} onChange={handleChange}>
            <option value='Todo'>Todo</option>
            <option value='In Progress'>In Progress</option>
            <option value='Done'>Done</option>
          </select>

          <label>Ticket Description</label>
          <textarea name='description' value={newTicket.description || ''} onChange={handleChange} />

          <label>Assigned User</label>
          <select name='assignedUserId' value={String(newTicket.assignedUserId)} onChange={handleChange}>
            {users.length > 0 ? (
              users.map(user => (
                <option key={user.id} value={String(user.id)}>
                  {user.username}
                </option>
              ))
            ) : (
              <option value="">No users available</option>
            )}
          </select>

          <button type='submit' className="btn-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTicket;
