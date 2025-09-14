import { Outlet, NavLink, useLocation } from 'react-router-dom';
import './App.css';

export default function App() {
  const location = useLocation();
  console.log(location);
  console.log(window.location);

  return (
    <div>
      <h1>My App</h1>
      <p>현재 경로 hook : {location.pathname}</p>
      <p>현재 경로 window : {window.location.pathname}</p>
      <nav>
        <NavLink to="/">Home</NavLink> | {" "}
        <NavLink to="/about">About</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
