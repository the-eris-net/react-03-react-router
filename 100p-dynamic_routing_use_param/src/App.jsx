import { Outlet, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

export default function App() {
  const handleChange = (e) => {
    setLogged(e.target.checked);
  };

  return (
    <div>
      <h1>My App</h1>
      <br />
      <nav>
        <NavLink to="/">Home</NavLink> | {" "}
        <NavLink to="/about">About</NavLink>
      </nav>
      <Outlet  />
    </div>
  );
}
