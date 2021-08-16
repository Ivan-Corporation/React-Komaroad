// *useContext
// Передача данных между двумя независимыми компонентами
export const Context = React.createContext();

<Context.Provider value={[context, setContext]}>
    <FirstComponent />
    <SecondContext />
</Context.Provider>


// *useCallback
// Хук useCallback вернёт мемоизированную версию колбэка,
// который изменяется только, если изменяются значения одной из зависимостей.
export default function UseCallback() {
    const [counter, setCounter] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const updateOne = () => {
        console.log(
            "Я не мемоизирован"
        );
    };

    const updateTwo = useCallback(() => {
        console.log(
            "Я мемоизирован!"
        );
    }, [counter])
}

// *useMemo
// useMemo будет повторно вычислять мемоизированное значение только тогда, 
// когда значение какой-либо из зависимостей изменилось. 
// Эта оптимизация помогает избежать дорогостоящих вычислений при каждом рендере.
const sum = n => {
    return n + n
};

const MemoComponent = () => {
    const [num, setNum] = useState(1);
    const [isGreen, setIsGreen] = useState(true);
    const result = useMemo(() => sum(num), [num]);
}


// *useRef
// Основное его предназначение заключается в предоставлении доступа DOM для работы с дочерними элементами.

// !использование useRef не считается хорошим «тоном» и работа с DOM элементами напрямую в React
// !должна происходить только тогда, кода других вариантов не осталось.


function UseRef() {
    const ref = useRef(null)

    const focus = () => {
        ref.current.focus()
    }
}

// *useReducer
// Данный хук является альтернативой хуку useState и применяется в случаях, когда первоначальный стейт
// является более сложным и многосоставным или в моменты, когда новое состояние зависит от предыдущего. 

const [state, dispatch] = useReducer(reducer, {
    count: 0,
});
const { count } = state;