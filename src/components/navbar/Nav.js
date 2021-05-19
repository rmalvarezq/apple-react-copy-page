import React from "react";
import "./nav.css";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="list">

        <a className="item" href="www.google.com">
        <img
          className="logo"
          src="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/icons%2Flogotipo-de-mac-os%20(2).png?alt=media&token=70ba0e2b-e306-48c1-b947-932b20019708"
          alt=""
        />
          Mac
        </a>
        <a className="item" href="www.google.com">
          iPhad
        </a>
        <a className="item" href="www.google.com">
          iPhone
        </a>
        <a className="item" href="www.google.com">
          Watch
        </a>
        <a className="item" href="www.google.com">
          TV
        </a>
        <a className="item" href="www.google.com">
          Music
        </a>
        <a className="item" href="www.google.com">
          Soporte
        </a>
        <a className="item" href="www.google.com">
          Dónde comprar
        </a>
        <img
          className="logo"
          src="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/icons%2Floupe.png?alt=media&token=dd982573-bbda-42c3-b135-3c13035675b7"
          alt=""
        />
      </div>
    </nav>
  );
}
