import { useState } from 'react';
function welcome(props)
{
const [name, setName] = useState(''), [role, setRole] = useState('');
  return (
    <div>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Role" onChange={e => setRole(e.target.value)} />
      <div style={{ marginTop: '20px' }}>
        <h2>Welcome, {name}!</h2>
        <p>Your Role – {role}</p>
      </div>
    </div>
  );
}

export default welcome;