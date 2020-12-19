import React from "react";
export const Notificacion = ({mostrarNotificacion}) => {
  return (
    <>
      <div className={`notification-container ${mostrarNotificacion ? 'show' : ''}`}>
        <p>Ya pusiste esa letra❗ 🏹</p>
      </div>
    </>
  );
};
