// Ref тот же пример что и useRef Hook
// Как говорил в подобном хуке, доступ к DOM


function Ref(props) {
    // textInput должна быть объявлена здесь, чтобы реф мог иметь к ней доступ
    const textInput = useRef(null);

    function handleClick() {
        textInput.current.focus();
    }

    return (
        <div className='App-header'>
            <input
                type="text"
                ref={textInput} />
            <input
                type="button"
                value="Фокус на поле для ввода текста"
                onClick={handleClick}
            />
        </div>
    );
}
export default Ref