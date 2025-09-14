import { Outlet, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>My App</h1>
      <nav>
        <NavLink to="/">Home</NavLink> | {" "}
        <NavLink to="/about">About</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}