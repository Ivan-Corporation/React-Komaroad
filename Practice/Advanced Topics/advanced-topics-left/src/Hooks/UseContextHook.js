import React, { useState } from "react";
import { Context } from './UseContext/Context';
import FirstComponent from './UseContext/FirstComponent';
import SecondComponent from './UseContext/SecondComponent';


export default function UseContextHook() {
  const [context, setContext] = useState("Изначальный контекст");
  return (
    <div className='App-header'>
    <Context.Provider value={[context, setContext]}>
      <FirstComponent />
      <SecondComponent />
    </Context.Provider>
    </div>
  );
}