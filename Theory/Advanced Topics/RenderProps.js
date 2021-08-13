// Render Props
// Рендер-проп это — функция, которая сообщает компоненту что необходимо рендерить.
<DataProvider render={data => (
    <h1>Привет, {data.target}</h1>
)} />