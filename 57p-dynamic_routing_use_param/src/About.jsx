import {
  NavLink,
  Outlet,
  useParams,
  useNavigate,
} from 'react-router-dom';
import { useState } from 'react';

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

export function Other() {
  const { keyword } = useParams();
  
  return (
    <div>
      <h2>{keyword}</h2>
      <p>매칭되는 정보가 없습니다</p>
    </div>
  );
}

export default function About() {
  const [keyword, setKeyword] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => setKeyword(e.target.value);
  const handleClick = () => navigate(`/about/${keyword}`);

  return (
    <div>
      <h2>About Page</h2>
      <input onChange={handleChange} />{" "}
      <button onClick={handleClick}>검색</button>
      <nav>
        <NavLink to="song">노래</NavLink> | {' '}
        <NavLink to="movie">영화</NavLink> | {' '}
        <NavLink to="/">홈으로</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
