import React from 'react';

function UserProfile({ name, age }) {
if (!name || !age) {
    return <p>Error: Missing user data!</p>;
}

return (
    <div style={{ marginBottom: '15px' }}>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Age:</strong> {age}</p>
    </div>
);
}

export default UserProfile;
