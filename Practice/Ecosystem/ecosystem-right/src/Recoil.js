import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';


const textState = atom({
    key: 'textState', // уникальный ID (каждый атом и селектор имеет свой)
    default: '', // Начальное значение
  });

 export default function Recoil() {
    return (
      <div className='App-header'>
        <TextInput />
        <CharacterCount />
      </div>
    );
  }
  


  // Два компонента

  function TextInput() {
    const [text, setText] = useRecoilState(textState);
  
    const onChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Ввод: {text}
      </div>
    );
  }


  function CharacterCount() {
    const count = useRecoilValue(charCountState);
  
    return <>Число символов: {count}</>;
  }

  const charCountState = selector({
    key: 'charCountState', // уникальный ID (каждый атом и селектор имеет свой)
    get: ({get}) => {
      const text = get(textState);
  
      return text.length;
    },
  });

