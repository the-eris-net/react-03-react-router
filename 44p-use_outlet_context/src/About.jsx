import { NavLink, Outlet, useOutletContext } from 'react-router-dom';

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
  const { logined } = useOutletContext();

  return (
    <div>
      <h2>About Page</h2>
      <p>로그인 상태 : {logined ? '로그인' : '로그아웃'}</p>
      <nav>
        <NavLink to="song">노래</NavLink> | <NavLink to="movie">영화</NavLink> |{' '}
        <NavLink to="/">홈으로</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
