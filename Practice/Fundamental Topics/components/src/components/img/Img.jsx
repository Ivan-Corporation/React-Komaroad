import trols from './trols.png';
import two from './two.jpg';
import three from './three.jpg';

function Img() {
    return(
        <div className='App'>
            <h2>Картинки блин</h2>
            <br></br>
        <img src={trols}/>
        <br></br>
        <img src={two}/>
        <br></br>
        <img src={three}/>
        </div>
        
    )
}
export default Img