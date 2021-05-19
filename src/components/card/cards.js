import React from "react";
import "./card.css";

export default function Cards() {
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <div className="cards">
          <div className="wrapper">
            <h1 className="headline" id="color-title">
              iPhone 12 Pro
            </h1>
            <h2 className="subhead" style={{ color: "white" }}>
              Un salto al siguiente nivel.
            </h2>
            <h2 className="info">
              Más información
              <i class="material-icons">chevron_right</i>
            </h2>
          </div>
          <img
            className="iphone-pro"
            src="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/images%2Fiphone12.JPG?alt=media&token=8559f083-db8c-4f7a-ba54-b78bbda77e87"
            alt=""
          />
        </div>
      </div>
      <div className="card-wrapper">
        <div className="cards">
          <div className="wrapper">
            <h1 className="headline"id="color-title">
            <img
          className="icon-logo"
          src="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/icons%2Flogotipo-de-mac-os%20(2).png?alt=media&token=70ba0e2b-e306-48c1-b947-932b20019708"
          alt=""
        /> Watch
            </h1>
            <h4 > SERIES 6</h4>
            <h2 className="subhead" id="color-watch">
              Un futuro más saludable en tu muñeca.
            </h2>
            
            <h2 className="info">
              Más información
              <i class="material-icons">chevron_right</i>
            </h2>
          </div>
          <img
            className="watch"
            src="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/images%2Fapplewatch.JPG?alt=media&token=1770f604-842e-499f-a88b-b24743d74703"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
