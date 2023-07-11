import React, {useState} from 'react';

function App() {
    let [likes, setLikes] = useState(0);
    const incrementValue = () => {
        setLikes(likes += 1)
        return console.log(likes)
    }
    const decrementValue = () => {
        setLikes(likes -= 1)
        return console.log(likes)
    }
    return (
        <div>
            <h1>{likes}</h1>
            <button onClick={incrementValue}> increment </button>
            <button onClick={decrementValue}> decrement </button>
        </div>
    );
}

export default App;
