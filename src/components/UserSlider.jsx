import React, { useState } from 'react';
import { Container } from '@mui/material';
import UserData from './UserData';
import Counter from './Counter';

function UserSlider({ userId }) {
    const [count, setCount] = useState(userId);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <Container>
            <Counter
                count={count}
                max={10}
                min={1}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
            />
            <UserData userId={count} />
        </Container>
    );
}

export default UserSlider;
