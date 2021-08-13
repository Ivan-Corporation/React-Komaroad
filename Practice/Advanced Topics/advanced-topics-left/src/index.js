import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CustomHook from './Hooks/CustomHook';
import UseContextHook from './Hooks/UseContextHook';
import UseCallback from './Hooks/UseCallback';
import MemoComponent from './Hooks/UseMemo';
import UseRef from './Hooks/UseRef';
import UseReducer from './Hooks/UseReducer';
import Ref from './Ref';
import RenderProps from './RenderProps';




ReactDOM.render(
  <React.StrictMode>

    {/* Hooks */}

    <CustomHook />
    {/* <UseContextHook /> */}
    {/* <UseCallback/> */}
    {/* <MemoComponent/> */}
    {/* <UseRef/> */}
    {/* <UseReducer/> */}


    {/* <Ref/> */}

    {/* <RenderProps/> */}





  </React.StrictMode>,
  document.getElementById('root')
);

