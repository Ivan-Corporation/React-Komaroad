
// Пример с офф сайта Реакт
// Ключи помогают React определять, какие элементы были изменены, добавлены или удалены.

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (<div className='App-header'>
        <ul>{listItems}</ul>

    </div>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);