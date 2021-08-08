import { useState } from 'react';

const CountButtonComponent = ({ initialCount = 0 }) => {
    const [count, setCount] = useState(initialCount);
    return (
        <div className='App-header'>
            Count: {count}
            <button className='button' onClick={() => setCount(initialCount)}>Resetar Contagem</button>
            <button className='button' onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button className='button' onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
    );
}
export default CountButtonComponent