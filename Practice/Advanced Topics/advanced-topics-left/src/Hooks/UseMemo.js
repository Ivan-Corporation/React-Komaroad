import { useState, useMemo } from 'react';

const sum = n => {
	return n + n
 };

const MemoComponent = () => {
    const [num, setNum] = useState(1);
    const [isGreen, setIsGreen] = useState(true);
    const result = useMemo(() => sum(num), [num]);
   
   return (
      <div className='App-header'>
        <h1 onClick={() => setIsGreen(!isGreen)}
          style={{ color: isGreen ? "green" : "red" }}
        >
          Цвета
        </h1>
        <h2>
          Сумма {result}
        </h2>
        <button onClick={() => setNum(num + 1)}>➕</button>
      </div>
    );
  };
export default MemoComponent;