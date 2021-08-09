import React from 'react'
import { useState } from 'react';

function UseEffectHook() {
    const [name, setName] = React.useState("Koma");
    const [age, setAge] = React.useState(28);
      
    React.useEffect(() => {     
      document.title = `Привет ${name}`;  
      console.log("useEffect");
    },
    [name]); // useEffect только при изменении массива [name]
      
    const changeName = (event) => setName(event.target.value);
    const changeAge =(event) => setAge(event.target.value);
     
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
  export default UseEffectHook