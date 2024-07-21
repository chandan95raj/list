import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = Cookies.get('user');
    if (user) {
      setUsername(user);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      {username ? (
        <p>Welcome, {username}!</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;

