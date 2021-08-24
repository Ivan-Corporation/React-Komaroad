import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactHookForm from './ReactHookForm';
import Formik from './Formik';
import FinalForm from './FinalForm';
import Jest from './Jest';




ReactDOM.render(
  <React.StrictMode>

  {/* <ReactHookForm/> */}

  {/* <Formik/> */}

  {/* <FinalForm/> */}


  <Jest/>

  {/* <App/> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
