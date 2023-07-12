import React, {useState} from 'react';

function App() {
    const [likes, setLikes] = useState(0);
    const [value, setValue] = useState('');
    const incrementValue = () => {
        setLikes(likes + 1)
        return console.log(likes)
    }
    const decrementValue = () => {
        setLikes(likes - 1)
        return console.log(likes)
    }
    const inputHandler = (e) => {
        setValue(e.currentTarget.value)
    }
    
    return (
        <div>
            <h1>{likes}</h1>
            <h2>{value}</h2>
            <input type="text" value={value} onChange={inputHandler}/>
            <button onClick={incrementValue}> increment</button>
            <button onClick={decrementValue}> decrement</button>
        </div>
    );
}

export default App;
