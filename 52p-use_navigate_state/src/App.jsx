import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [logined, setLogged] = useState(false);
  // message가 의도하지 않았을 때 뜨면 Home을 눌러준다
  const message = useLocation().state?.message;

  const handleChange = (e) => {
    setLogged(e.target.checked);
  };

  return (
    <div>
      <h1>My App</h1>
      <input type="checkbox" 
        checked={logined} 
        onChange={handleChange} /> 로그인 상태
      {message && <p style={{ color: 'red' }}>{message}</p>}
      <br />
      <nav>
        <NavLink to="/">Home</NavLink> | {" "}
        <NavLink to="/about">About</NavLink>
      </nav>
      <Outlet context={{ logined }} />
    </div>
  );
}
