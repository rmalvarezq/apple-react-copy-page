import React from "react";
import "./imac.css";
export default function Imac() {
  return (
    <div className="container" id="img-color">
      <div className="wrapper">
        <h2 className="headline"id="color-iMac" >iMac </h2>
        <h3 className="subhead">Dile hola.</h3>
        <div className="awail-wrapper">
          <h3 className="avail-msg">Consulta disponible más adelante</h3>
        </div>
        <h2 className="info">
          Más información
          <i class="material-icons">chevron_right</i>
        </h2>
      </div>
      <img
        className="cell" 
        src="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/images%2Fimac.JPG?alt=media&token=b63204eb-7bb9-49f8-9e85-be2020a320fd"
        alt=""
      />
    </div>
  );
}
