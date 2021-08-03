import React, { useState } from 'react';

function Clicker() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Кликер</h3>
            <p>Очки: {count} </p>
            <button className='btn' onClick={() => setCount(count + 1)}>
                +Очко
            </button>
        </div>
    );
}
export default Clicker