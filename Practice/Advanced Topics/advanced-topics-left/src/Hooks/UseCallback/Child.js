import React, { useEffect } from "react";

export default function Child({ updateOne, updateTwo }) {
  useEffect(() => {
    updateOne();
  }, [updateOne]);

  useEffect(() => {
    updateTwo();
  }, [updateTwo]);

  return <div className="App" />
}