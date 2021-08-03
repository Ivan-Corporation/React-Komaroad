// Образец
// Из components
function App() {
    return (
        <div className="App">

            <Image />

            <Line />

            <Text />

        </div>
    );
}
////////////////////////////////////

// Function component
// Изначально не имели доступа к методам жизненого цикла
// React hooks сделали функциональные компоненты доминирующими
function Ivan() {
    return <h2>Я украинец</h2>;
}

// Class component
// Доступ к методам жизненного цикла React
// Практически вытеснены хуками...
class Ivan extends React.Component {
    render() {
        return <h2>Я русский</h2>;
    }
}

