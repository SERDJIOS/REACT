import React, { useCallback, useState } from 'react';

// React.memo
// if props did not change => don't rerender
// else rerender
// eslint-disable-next-line react/display-name
const Button = React.memo(({ onClick }) => {
  console.log('Button rendered');

  return <button onClick={onClick}>Click me</button>
})

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  // Чтобы запомнить между рендерами, что handleClick одна и та же функция
  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick} />
    </div>
  )
}