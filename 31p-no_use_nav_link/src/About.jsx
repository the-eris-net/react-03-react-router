import { Link, Outlet, useLocation } from 'react-router-dom';

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
  const location = useLocation();

  return (
    <div>
      <h2>About Page</h2>
      <nav>
        <Link
          to="song"
          className={location.pathname === '/about/song' ? 'active' : ''}>
          노래
        </Link>{' '}
        |{' '}
        <Link
          to="movie"
          className={location.pathname === '/about/movie' ? 'active' : ''}>
          영화
        </Link>{' '}
        | <Link to="/">홈으로</Link>
      </nav>
      <Outlet />
    </div>
  );
}
