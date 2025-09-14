import { Outlet, NavLink, useMatch } from 'react-router-dom';
import './App.css';

export default function App() {
  const match = useMatch('/about/*');
  console.log(match);

  return (
    <div>
      <h1>My App</h1>
      <span>현재 경로 match.pathname : {match?.pathname}</span><br />
      <span>현재 경로 match.pathnameBase : {match?.pathnameBase}</span>
      <nav>
        <NavLink to="/">Home</NavLink> | {" "}
        <NavLink to="/about">About</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
