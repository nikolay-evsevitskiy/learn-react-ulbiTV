import React, {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0)
    const incrementValue = () => {
        setCount(count + 1)
    }
    const decrementValue = () => {
        setCount(count - 1)
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={incrementValue}> increment</button>
            <button onClick={decrementValue}> decrement</button>
        </>
    );
};
