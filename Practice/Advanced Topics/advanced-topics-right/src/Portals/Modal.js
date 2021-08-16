import React from "react";
import bloody from './bloody.png'

const Modal = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className='App-header'>
      <h2>{message}</h2>
      <button className="button" onClick={onClose}>
        Закрыть
      </button> 
      <img src={bloody}/>
    </div>
  );
};

export default Modal;