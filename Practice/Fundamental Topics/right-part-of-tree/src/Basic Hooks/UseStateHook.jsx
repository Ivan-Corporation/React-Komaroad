import { useState } from 'react';

const UseStateHook = ({ initialCount = 0 }) => {
    const [count, setCount] = useState(initialCount);
    console.log("useState");
    return (
        <div className='App-header'>
            Count: {count}
            <button className='button' onClick={() => setCount(initialCount)}>Начальный state</button>
            <button className='button' onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button className='button' onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
    );
}
export default UseStateHook