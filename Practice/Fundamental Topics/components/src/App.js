import './App.css';
import Image from './components/Image';
import Text from './components/Text';
import Line from './components/Line';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <b>_______________________________________________________________________________________________</b>
       
        <br></br>
        <br></br>
        <br></br>
        <Image/>
        <Line/>
        <Text/>
        

      </header>
      <footer>Права мои</footer>

    </div>
  );
}

export default App;
