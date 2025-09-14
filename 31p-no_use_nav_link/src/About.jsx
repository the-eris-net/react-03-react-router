import { Link, Outlet, useMatch } from 'react-router-dom';

export function Song() {
  return (
    <div>
      <h2>About A Girl</h2>
      <p>너바나의 노래</p>
    </div>
  );
}

export function Movie() {
  return (
    <div>
      <h2>About Time</h2>
      <p>레이첼 맥 아담스 주연 영화</p>
    </div>
  );
}

export default function About() {
  const match = useMatch("/about/*");
  console.log(match);

  return (
    <div>
      <h2>About Page</h2>
      <nav>
        <Link to="song" >노래</Link> | {" "}
        <Link to="movie">영화</Link> | {" "}
        <Link to="/">홈으로</Link>
      </nav>
      <Outlet />
    </div>
  );
}
