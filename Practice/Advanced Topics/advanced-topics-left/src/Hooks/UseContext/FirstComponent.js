import React, { useContext } from "react";
import { Context } from "./Context";

export default function FirstComponent() {
  const [context, setContext] = useContext(Context);
  return (
    <div>
      Первый Компонент: <b></b>
      <button onClick={() => setContext("Контекс изменён")}>
      Изменить значение другого компонента
      </button>
    </div>
  );
}