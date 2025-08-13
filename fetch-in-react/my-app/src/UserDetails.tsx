/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { UserCard } from './UserCard';
import type { User } from './Users';

type Props = {
  userId: number;
  onCancel: () => void;
};

export function UserDetails({ userId, onCancel }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [user, setUser] = useState<User>();

  // ✅ Fetch specific user when component mounts or userId changes
  useEffect(() => {
    async function fetchUser() {
      try {
        setIsLoading(true);
        setError(undefined);
        setUser(undefined); // Clear old user while loading

        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data = (await res.json()) as User;
        setUser(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUser();
  }, [userId]); // Runs again whenever userId changes

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error || !user) {
    console.error('Fetch error:', error);
    return (
      <p>Error! {error instanceof Error ? error.message : 'Unknown Error'}</p>
    );
  }

  return (
    <div>
      <button onClick={onCancel}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
