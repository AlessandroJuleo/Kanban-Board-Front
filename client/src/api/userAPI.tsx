import Auth from '../utils/auth';

const retrieveUsers = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/users', { // 🔹 Asegurar URL completa del backend
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    if (!response.ok) {
      throw new Error('Invalid user API response, check network tab!');
    }

    const data = await response.json();
    return data;

  } catch (err) {
    console.log('Error from data retrieval:', err);
    return [];
  }
};

export { retrieveUsers };
