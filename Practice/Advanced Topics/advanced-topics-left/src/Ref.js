import { useRef } from 'react';

function Ref(props) {
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