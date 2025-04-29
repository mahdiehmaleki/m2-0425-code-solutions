import { useState } from 'react';

export default function ControlledForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Username:', { username });
    console.log('Password:', { password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Controlled Registration Form</h1>
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
