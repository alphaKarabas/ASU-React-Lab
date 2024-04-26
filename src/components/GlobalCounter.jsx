import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount, decrementByAmount } from '../store/AppSlice';
import Counter from './Counter';

function GlobalCounter({ by=1 }) {
    const count = useSelector(state => state.AppSlice.value);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementByAmount(by));
    };

    const handleDecrement = () => {
        dispatch(decrementByAmount(by));
    };

    return (
        <Counter
            count={count}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
        />
    );
}

export default GlobalCounter;
