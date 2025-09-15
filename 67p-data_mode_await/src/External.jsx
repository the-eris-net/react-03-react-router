import { useLoaderData, useRouteError } from 'react-router-dom';

export default function External() {
  const data = useLoaderData();

  return (
    <div>
      <h2>외부에서 데이터를 가져옵니다</h2>
      <div>
        <strong>title : {data.title}</strong>
        <br />
        <span>body : {data.body}</span>
      </div>
    </div>
  );
}

export function ExternalError() {
  const data = useRouteError();

  return (
    <div>
      <h2>데이터를 가져오는 중 오류가 발생했습니다.</h2>
      <div>
        <strong>원인 : {data?.message}</strong>
        <br />
      </div>
    </div>
  );
}
