import React from "react";
import "./newcards.css";

export default function NewCards() {
  return (
    <div className="card-container">
      <div className="newcard">
        <div className="cards">
          <div className="wrapper">
            <h1 className="headline" id="color-airtag">
              AirTag
            </h1>
            <h2 className="subhead" id="color-airtag">
              Pierde la cosumbre de perder las cosas.
            </h2>
            <div className="awail-wrapper">
              <h3 className="avail-msg">Consulta disponible más adelante</h3>
            </div>
            <h2 className="info">
              Más información
              <i class="material-icons">chevron_right</i>
            </h2>
          </div>
          <img
            id="img-airtag"
            className="watch"
            src="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/images%2Fairtag.JPG?alt=media&token=444a7d17-138b-40eb-b5b3-3c16bfe6ea1d"
            alt=""
          />
        </div>
      </div>
      <div className="newcard">
        <div className="cards">
          <div className="wrapper">
            <h1 className="headline" id="color-airtag">
              <img
                className="icon-logo"
                src="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/images%2Flogo%20mac%20negro.png?alt=media&token=1014cdc4-f0bb-4a3d-9aa3-94ba5f93e16e"
                alt=""
              />
              Arcade
            </h1>
            <h2 className="subhead" id="color-airtag">
              Wonderboc: Crea aventuras.
            </h2>

            <h2 className="info">
              Más información
              <i class="material-icons">chevron_right</i>
              Prueba gratis <sup> 1</sup>
              <i class="material-icons">call_made</i>
            </h2>
          </div>
          <img
            id="img-arcade"
            className="watch"
            src="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/images%2Farcade.JPG?alt=media&token=124a1ab6-dfb3-44bb-ba13-a9ad99692387"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
