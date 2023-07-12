import React, {useState} from 'react';
import {Counter} from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

function App() {
    const [value, setValue] = useState('');

    const inputHandler = (e) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div>
            <Counter/>
            <ClassCounter/>
            <h2>{value}</h2>
            <input type="text" value={value} onChange={inputHandler}/>

        </div>
    );
}

export default App;
