import { useState } from 'react';

export default function Many() {
  const arr = [<ListItem idx={1} key={1} />];
  for (let i = 2; i < 1000; i++) {
    arr.push(<ListItem idx={i} key={i} />);
  }

  return <ul style={{ padding: '10dvh 10dvw' }}>{arr}</ul>;
}

function ListItem(props: { idx: number }) {
  const [checked, setChecked] = useState(false);

  return (
    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
      {`No. ${props.idx}`}
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
    </li>
  );
}
