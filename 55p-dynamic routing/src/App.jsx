import { Outlet, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [logined, setLogged] = useState(false);

  const handleChange = (e) => {
    setLogged(e.target.checked);
  };

  return (
    <div>
      <h1>My App</h1>
      <input type="checkbox" 
        checked={logined} 
        onChange={handleChange} /> 로그인 상태
      <br />
      <nav>
        <NavLink to="/">Home</NavLink> | {" "}
        <NavLink to="/about">About</NavLink>
      </nav>
      <Outlet context={{ logined }} />
    </div>
  );
}
