import React, { useState } from 'react';

function Clicker() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Кликер </h3>
            <p>Очки: {count} </p>
            <button className='btn' onClick={() => setCount(count + 1)}>
                +Очко
            </button>
        </div>
    );
}




// Пример класса


// export class Clicker extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }

//     render() {
//         return (
//             <div>
//                 <h3>Кликер</h3>
//                 <p>Очки:{this.state.count}</p>
//                 <button className='btn' onClick={() => this.setState({ count: this.state.count + 1 })}>
//                     +Очко
//                 </button>
//             </div>
//         );
//     }
// }


export default Clicker