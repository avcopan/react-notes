import { useState } from 'react'; // This is a react "hook"

export function Counter() {
  // This allows the value to update the DOM
  const [count, setCount] = useState(0);
  console.log('rendered!')

  const increment = () => {
    console.log('count', count);
    setCount(count + 1);
  }

  return (
    <div>
      <Label count={count} />
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export function Label(props) {
  console.log('label rendered')
  return (
    <span>I have been clicked {props.count} times</span>
  );
}