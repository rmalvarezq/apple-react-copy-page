import React from "react";
import "./contenedor.css";

export default function Contenedores() {
  return (
    <div className="container">
      <div className="wrapper">
        <h2 className="headline">iPhone 12</h2>
        <h3 className="subhead">Morado. Soñado.</h3>
        <div className="awail-wrapper">
          <h3 className="avail-msg">Muy pronto disponible en morado</h3>
        </div>
        <h2 className="info">
          Más información
          <i class="material-icons" >chevron_right</i>
        </h2>
      </div>
      <img
        className="cell"
        src="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/icons%2Fiphone.JPG?alt=media&token=9c9fd6da-554b-4e96-aa70-3059f5c200d5"
        alt=""
      />
    </div>
  );
}
