// Composition vs Inheritance

// - Не злоупотребляйте наследованием
// - Композиция может быть легче и удобнее
// - React даёт предпочтение использованию композиций над иерархическим наследованием компонентов

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function App() {
    return (
        <SplitPane
            left={
                <Contacts />
            }
            right={
                <Chat />
            } />
    );
}