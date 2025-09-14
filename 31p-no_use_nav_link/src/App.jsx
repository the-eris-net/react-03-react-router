import { Outlet, Link, useLocation } from "react-router-dom";
import "./App.css";

export default function App() {
  const location = useLocation();

  return (
    <div>
      <h1>My App</h1>
      <nav>
        <Link to="/" 
          className={location.pathname === "/" ? "active" : ""}>
        Home
        </Link> | {" "}
        {/* 아래처럼 하면 하위 타입이 적용될 때 표시가 안됨 */}
        {/* <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link> */}
        {/* 아래처럼 한다고 해도 다른 경로의 about에 반응할 수 있어서 안전하지는 않음 */}
        <Link to="/about" 
          className={location.pathname.includes('/about') ? "active" : ""}>
        About
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}