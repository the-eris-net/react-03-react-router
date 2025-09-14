import { NavLink } from 'react-router-dom';
import './App.css';

export default function App({children}) {

  return (
    <div>
      <h1>My App</h1>
      <br />
      <nav>
        <NavLink to="/" exact activeClassName="active">Home</NavLink> | {" "}
        <NavLink to="/about" activeClassName="active">About</NavLink>
      </nav>
      {children}
    </div>
  );
}
