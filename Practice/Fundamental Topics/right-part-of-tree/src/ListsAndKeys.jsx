
import Blog from './Blog';

const posts = [
  {id: 1, title: 'Пост 1', content: 'Бла бла бла кококо'},
  {id: 2, title: 'Пост 2', content: 'Вышел новый попорот'},
  {id: 3, title: 'Пост 3', content: 'Вышел новый попорот'},
  {id: 4, title: 'Пост 4', content: 'Вышел новый попорот'}
];


function ListsAndKeys(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return ( <div className='App-header'>
      <ul>{listItems}</ul>
      <Blog posts={posts} />
      </div>
    );
  }

  
  
 

  export default ListsAndKeys