import {useReducer, useEffect} from 'react'

export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, {
      count: 0,
    });
    const { count } = state;
  
    useEffect(() => {
      const id = setInterval(() => {
        dispatch({ type: "plus" });
      }, 1000);
      return () => clearInterval(id);
      
    }, []);
    console.log(state)
  
    return (
      <div className='App-header'>
        <h1>count: {count}</h1>
        <button onClick={() => dispatch({ type: "plus" })}>Плюс</button>
        <button onClick={() => dispatch({ type: "minus" })}>Минус</button>
      </div>
    );
  }


//////////////////////////////////////

  function reducer(state, action) {
    switch (action.type) {
      case "plus":
        return {
          ...state,
          count: state.count + 1
        };
      case "minus":
        return {
          ...state,
          count: state.count - 1
        };
      default: {
        return state;
      }
    }
  }