import React from "react";
import ReactDOM from "react-dom";
import portals from './portals.png'


const PortalModal = ({ message, isOpen, onClose }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    // любой React-компонент, который может быть отрендерен
    <div className='App-header'>
      <h2>{message}</h2>
      <button className="button" onClick={onClose}>
        Закрыть
      </button>
      <img src={portals}/>
    </div>,
    // DOM-элемент
    document.body
  );
};

export default PortalModal;