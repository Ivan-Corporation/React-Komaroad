import {useRef} from 'react'

function UseRef() {
    const ref = useRef(null)
  
    const focus = () => {
      ref.current.focus()
    }
  
    return (
      <div className='App-header'>
        <input ref={ref} />
        <br></br>
        <button onClick={focus}>Focus</button>
      </div>
    )
  }

export default UseRef