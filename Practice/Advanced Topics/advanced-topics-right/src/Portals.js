import React, { useState } from "react";
import Modal from './Portals/Modal';
import PortalModal from './Portals/PortalModal';
import './App.css'
import './button.css'

function Portals() {
  const [open, setOpen] = useState(false);
  const [openp, setOpenP] = useState(false);
  return (
    <div className='App-header'>
      <div>
        <button className="button" onClick={() => setOpen(true)}>
          Открыть обычный компонент
        </button> <hr></hr>
        <button className="button" onClick={() => setOpenP(true)}>
          Открыть мир порталов (отдельный DOM)
        </button>
      </div>

      <div>
        <Modal
          message="Я обычный жалкий компонент..."
          isOpen={open}
          onClose={() => setOpen(false)}
        />
        <PortalModal
          message="Мы внутри порталов!"
          isOpen={openp}
          onClose={() => setOpenP(false)}
        />
      </div>
    </div>
  );
}

export default Portals;