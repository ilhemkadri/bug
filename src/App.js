import React, { useState } from 'react';
import Counter from './components/usercount';
import UserProfile from './components/UserProfile';

function App() {
  const [users] = useState([
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
  ]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Debugging React Application</h1>
      <Counter initialCount={0} />
      <hr />
      <h2>User Profiles</h2>
      {users.map((user) => (
        <UserProfile key={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
}

export default App;
