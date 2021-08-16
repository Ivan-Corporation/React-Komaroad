import React, { useContext } from "react";
import { Context } from "./Context";

export default function SecondComponent() {
  const [context, setContext] = useContext(Context);
  return <div> Второй компонент: <b></b> {context}</div>;
}