// Conditional Rendering - разделение логики вашего компонента на независимые компоненты
// Самые часто используемые методы In My Humble Opinion:

// 1 - if/else
// 2 - Тернарные операции
// 3 - if c оператором - && 
// 4 - Switch case
// 5 - Higher-Order Components


///////////////////////////////////////////////////////
// 1 - if/else
function LoggedStatus(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <LoggedInUser />;
    }
    return <LoggedOutUser />;
}
ReactDOM.render(
    <LoggedStatus isLoggedIn={false} />,
    document.getElementById('root')
);


///////////////////////////////////////////////////////
// 2 - Тернарные операции
const russian = true;
return (
    <div>
        {russian ? (
            <h1>Я русский</h1>
        ) : (
            <h1>Я не русский... </h1>
        )}
    </div>
);



///////////////////////////////////////////////////////
// 3 - if c оператором - && 
const money = props.money;
return (
    <div>
        <h1>Ээээ брат... Бабки гони или резать будем!</h1>
        {money.length > 0 &&
            <h2>
                Вы даёте грабителям {money.length}.
            </h2>
        }else {
            <h1>Вы получаете перышко в ребрышко</h1>
        }
    </div>
);
const todo = ['Eat', 'Play', 'Read'];



///////////////////////////////////////////////////////
// 4 - Switch case
// Не лучший способ множественного рендеринга
function Notification({ param }) {
    return (
        <div>
            {(function () {
                switch (param) {
                    case 'Уведомление':
                        return 'Бла бла бла';
                    default:
                        return 'Пусто';
                }
            }
            )()}
        </div>
    );
}



///////////////////////////////////////////////////////
// 5 - Higher-Order Components
// Подробнее рассмотрим позднее в Advanced Topics
function withLoading(List) {
    return function EnhancedComponent({ isLoading, ...props }) {
        if (!isLoading) {
            return <List {...props} />;
        }
        return <div><p>Загрузка...</p></div>;
    };
}

// Как использовать
const ListWithLoading = withLoading(List);
<ListWithLoading
    isLoading={props.isLoading}
    list={props.list}
/>

