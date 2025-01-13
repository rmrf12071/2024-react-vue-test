import { useState } from 'react';
import { NavLink, useBlocker, useParams } from 'react-router';

export default function Page() {
  const { '*': path } = useParams();
  const num = Number(path?.match(/\d+$/));
  const prev = `page${num - 1}`;
  const next = `page${num + 1}`;

  const [max, setMax] = useState(10);

  useBlocker(({ nextLocation }) => {
    const nextNum = Number(nextLocation.pathname.match(/\d+$/)?.[0]);
    console.log(nextLocation, nextNum);
    return !isNaN(nextNum) ? nextNum >= max || nextNum <= 0 : false;
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100dvh',
        flexDirection: 'column',
      }}
    >
      <NavLink to={`/${prev}`}>{`move to ${prev}`}</NavLink>
      Now: {path}
      <NavLink to={`/${next}`}>{`move to ${next}`}</NavLink>
      <NavLink to={`/many`}>{`move to many`}</NavLink>
      <div>
        max: <input type="number" value={max} onChange={(e) => setMax(Number(e.target.value))} />
      </div>
    </div>
  );
}
