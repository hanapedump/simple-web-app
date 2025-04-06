// src/Counter.js
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); // State to hold the count

    const increment = () => {
        setCount(count + 1); // Increment the count
    };

    const decrement = () => {
        setCount(count - 1); // Decrement the count
    };

    return (
        <div className="text-center mt-4">
            <h2>Counter: {count}</h2>
            <button className="btn btn-success me-2" onClick={increment}>Increment</button>
            <button className="btn btn-danger" onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;