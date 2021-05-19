import React from "react";
import "./ipad.css";
export default function Ipad() {
  return (
    <div className="container-ipad">
      <div className="ipad-content">
        <h1 className="headline" style={{ color: "white" }}>
          iPad Pro
        </h1>
        <h2 className="subhead" style={{ color: "white" }}>
          Con los superpoderes del chip M1 de Apple.
        </h2>
        <h3 className="subhead" id="color">
          Consulta la disponibilidad más adelante
        </h3>
        <h2 className="info">
          Más información
          <span class="material-icons-outlined">arrow_forward_ios</span>
        </h2>
      </div>
      <img
        className="cell"
        src="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/images%2Fipad.JPG?alt=media&token=9edb8d8d-c5d8-4aed-8866-fa01a1446cbb"
        alt=""
      />
    </div>
  );
}
