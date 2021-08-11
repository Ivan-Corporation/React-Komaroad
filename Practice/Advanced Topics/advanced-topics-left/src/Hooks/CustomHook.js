import React from 'react';
import '../App.css'

const useThatIsOurCustomHook = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  // Общее value c двух хуков
  return [value, setValue];
};

const CustomHook = () => {
  const names = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      objectID: 1,
    },
    {
      title: 'Redux',
      url: 'https://github.com/Ivan-Corporation/React-Komaroad',    
      objectID: 2,
    },
    {
      title: 'Koma',
      url: 'https://github.com/Ivan-Corporation/React-Komaroad',   
      objectID: 3, 
    },
    {
      title: 'Moscow',
      url: 'https://github.com/Ivan-Corporation/React-Komaroad',
      objectID: 4,    
    },
    {
      title: 'Tatarins',
      url: 'https://github.com/Ivan-Corporation/React-Komaroad',
      objectID: 5,    
    },
    {
      title: 'Русский язык',
      objectID: 6,
    },
  ];

  // Ключ и значение
  const [searchTerm, setSearchTerm] = useThatIsOurCustomHook(
    'search',
    ''
  );

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  // Фильтр слов, напрямую не относится к теме
  const searchedNames = names.filter(name =>
    name.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='CustomHook'>
      <h1>Собственный хук</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <List list={searchedNames} />
    </div>
  );
};

const Search = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search">Поиск: </label>
    <input
      id="search"
      type="text"
      value={search}
      onChange={onSearch}
    /> <hr></hr>
  </div>
);

const List = ({ list }) =>
  list.map(item => <Item key={item.objectID} item={item} />);

const Item = ({ item }) => (
  <div><br></br>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
  </div>
);

export default CustomHook;
