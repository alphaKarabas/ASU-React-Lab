import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Counter = ({ count, onIncrement, onDecrement, max, min }) => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Button
                color="primary"
                variant="contained"
                onClick={onDecrement}
                disabled={count <= min}
                style={{ marginRight: 20 }}
            >
                -
            </Button>
            <Typography variant="h6" component="span">
                {count}
            </Typography>
            <Button
                color="primary"
                variant="contained"
                onClick={onIncrement}
                disabled={count >= max}
                style={{ marginLeft: 20 }}
            >
                +
            </Button>
        </Box>
    );
};

export default Counter;
