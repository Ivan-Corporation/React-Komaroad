import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CompLifeCycleAndCondRend from './CompLifeCycleAndCondRend.jsx';
import ListsAndKeys from './ListsAndKeys';

// Смерть...
// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.getElementById('root'));}, 10000);

const numbers = [1, 2, 3, 4, 5];




ReactDOM.render(
  <React.StrictMode>

    {/* <CompLifeCycleAndCondRend /> */}

    <ListsAndKeys numbers={numbers} />
    


  </React.StrictMode>,
  document.getElementById('root')

  
);

