import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    Cookies.set('user', username);
    navigate('/dashboard');
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('user');
    navigate('/');
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export { Login, Logout };
