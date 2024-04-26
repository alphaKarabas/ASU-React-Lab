import React, { useState, useEffect, useMemo } from 'react';

export default function UserData({ userId }) {
    const [user, setUser] = useState(null);

    const cachedUser = useMemo(() => user, [user]);

    useEffect(() => {
        if (cachedUser && cachedUser.id === userId) {
            setUser(cachedUser);
            return;
        }

        (async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data = await response.json();
            setUser(data);
        })();
    }, [userId, cachedUser]);

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
