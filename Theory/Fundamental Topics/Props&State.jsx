// PROPS
// Примерчик props (свойства)

function CountryAndCapital(props) {
    return <h3>Страна: <u>{props.country}</u>, столица: <u>{props.capital}</u></h3>
}

function App() {
    return (
        <div>
            <CountryAndCapital country="Новая Зеландия" capital="Веллингтон" />
            <CountryAndCapital country="Руссо" capital="Москоу" />
            <CountryAndCapital country="Казахстан" capital="Нур-Султан" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// React-компоненты обязаны вести себя как чистые функции по отношению к своим пропсам.

function CountryAndCapital(country, capital) {
    country = capital;
}






///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////



// STATES
// Как было раньше (можно так писать и сейчас)
export class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h4>Классовый компонент (State)<br></br> ↓</h4>
                <h4>Сейчас {this.state.date.toLocaleTimeString()}.</h4>
            </div>
        );
    }
}
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// Сравнение аналогичного кода

// С hooks (хуками)
// О хуках позднее
import React, { useState } from 'react';

function Clicker() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Кликер</h3>
            <p>Очки:{count}</p>
            <button onClick={() => setCount(count + 1)}>
                +Очко
            </button>
        </div>
    );
}

// Тот же но через Class state (без хуков)
// Код с костылями


class Clicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <h3>Кликер</h3>
                <p>Очки:{this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    +Очко
                </button>
            </div>
        );
    }
}