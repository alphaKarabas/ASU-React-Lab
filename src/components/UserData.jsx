import { useState, useEffect } from 'react';

export default function UserData({ userId }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data = await response.json();
            setUser(data);
        })();
    }, [userId]);

    return (
        <div>
            {user ? (
                <div>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
