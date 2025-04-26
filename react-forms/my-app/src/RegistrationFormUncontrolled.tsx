import React from 'react';
export default function UnControlledForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');
    console.log('Username:', username);
    console.log('Password:', password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Uncontrolled Registration Form</h1>
      <div>
        <label htmlFor="username">
          Username:
          <input type="text" name="username" />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" />
        </label>
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
