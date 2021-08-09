// Хук useState
// предоставляет функциональным компонентам доступ к состоянию React. 
import { useState } from 'react';

const UseStateHook = ({ initialCount = 0 }) => {
    const [count, setCount] = useState(initialCount);
    return (
        <div className='App-header'>
            Count: {count}
            <button className='button' onClick={() => setCount(initialCount)}>Начальный state</button>
            <button className='button' onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button className='button' onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
    );
}







// Хук useEffect
// позволяет управлять различными сопутствующими действиями в функциональном компоненте или то,
// что называется "side effects" (побочные эффекты), например:  
// извлечение данных,
// ручное изменение структуры DOM,
// использование таймеров,
// логгирование
// и т.д.

function UseEffectHook() {
    const [name, setName] = React.useState("Koma");
    const [age, setAge] = React.useState(28);

    React.useEffect(() => {
        document.title = `Привет ${name}`;
        console.log("useEffect");
    },
        [name]); // useEffect только при изменении массива [name]

    const changeName = (event) => setName(event.target.value);
    const changeAge = (event) => setAge(event.target.value);

    return (
        <div className='App-header'>
            <h3>Имя: {name}</h3>
            <h3>Возраст: {age}</h3>

            <div>
                <p>Имя: <input className='button' type="text" value={name} onChange={changeName} /></p>
                <p>Возраст: <input className='button' value={age} onChange={changeAge} /></p>
            </div>
        </div>
    );
}