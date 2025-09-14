import { Outlet, Link, useLocation } from "react-router-dom";
import "./App.css";

export default function App() {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>My App</h1>
      <nav>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link> | {" "}
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
      </nav>
      <Outlet />
    </div>
  );
}