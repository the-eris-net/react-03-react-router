import {
  NavLink,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from 'react-router-dom';

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
      <p>
        매칭되는 정보가 없습니다
      </p>
    </div>
  );
}

export default function About({children}) {
  const { path } = useRouteMatch();

  return (
    <div>
      <h2>About Page</h2>
      <nav>
        <NavLink to="/about/song" activeClassName="active">노래</NavLink> | {' '}
        <NavLink to="/about/movie" activeClassName="active">영화</NavLink> | {' '}
        <NavLink to="/" exact activeClassName="active">홈으로</NavLink>
      </nav>
      <Switch>
        <Route path={`${path}/song`} component={Song} />
        <Route path={`${path}/movie`} component={Movie} />
        <Route path={`${path}/:keyword`} component={Other} />
      </Switch>
    </div>
  );
}
