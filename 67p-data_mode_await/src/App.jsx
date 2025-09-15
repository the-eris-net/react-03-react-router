import { Outlet, NavLink, useNavigation } from 'react-router-dom';
import './App.css';

export default function App() {
  const navigation = useNavigation();

  return (
    <div>
      <h1>My App</h1>
      <br />
      <nav>
        <NavLink to="/">Home</NavLink> | {" "}
        <NavLink to="/about">About</NavLink> | {" "}
        <NavLink to="/external">External</NavLink>
      </nav>

      {navigation.state === 'loading' ? <div>Loading...</div> : <Outlet />}
    </div>
  );
}
