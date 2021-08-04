import './App.css';
import CountryAndCapital from './CountryAndCapital';
import Post from './Post/Post';
import { Clock } from './Clock';
import Clicker from './Clicker';


const post = {
  date: new Date(),
  text: 'Эмм.. а почему Россия подписана как Руссо?',
  author: {
    name: 'Русский',
    avatarUrl: 'https://pbs.twimg.com/profile_images/467038043204231168/KCR5tGcv.jpeg',
  },
};
const post2 = {
  date: new Date(),
  text: 'Кокококококо',
  author: {
    name: 'Аноним',
    avatarUrl: 'https://ibaka.ru/images/d807142051cd94d20970907697a4917f_full?.jpg',
  },
};
const post3 = {
  date: new Date(),
  text: 'Крым чей?',
  author: {
    name: 'Татарин',
    avatarUrl: 'https://opt-1586373.ssl.1c-bitrix-cdn.ru/upload/medialibrary/37e/37eea9cb0fe6cc9d1311e3a48c516782.jpg?158290875170268',
  },
};



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Страны:</h1> 
      {/* <h4 className='Clock'><Clock/></h4>
      <h4 className='Clicker'><Clicker/></h4> */}

            <CountryAndCapital country="Новая Зеландия" capital="Веллингтон" />
            <CountryAndCapital country="Руссо" capital="Москоу" />
            <CountryAndCapital country="Казахстан" capital="Нур-Султан" />


      <h4>Комментарии:</h4>
      <div className='Post'>
      <Post 
        date={post.date}
        text={post.text}
        
        author={post.author}
      />

      <Post 
        date={post2.date}
        text={post2.text}
        author={post2.author}
      />

      <Post 
        date={post3.date}
        text={post3.text}
        author={post3.author}
      />

      </div>
      </header>
    </div>
  );
}

export default App;
