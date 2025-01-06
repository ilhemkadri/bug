import React, { useState } from 'react';

function UserCount({ initialCount }) {
  console.log('Initial Count Prop:', initialCount); // Debugging console log
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount((prevCount) => Math.max(prevCount - 1, 0)); // Prevent negative count

  return (
    <div>
      <h2>User Count Component</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default UserCount;
