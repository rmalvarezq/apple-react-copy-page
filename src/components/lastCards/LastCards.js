import React from "react";
import "./lastcards.css";
export default function LastCards() {
  return (
    <div className="card-container">
      <div className="newcard">
        <div className="cards">
          <div className="wrapper">
            <h1 className="headline" id="color-airtag">
              <img
                className="icon-logo"
                src="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/images%2Flogo%20mac%20negro.png?alt=media&token=1014cdc4-f0bb-4a3d-9aa3-94ba5f93e16e"
                alt=""
              />{" "}
              One
            </h1>
            <h2 className="subhead" id="align">
              Disfruta cuatro servicios de Apple en uno. Y aprovecha más por
              menos.
            </h2>
            <h2 className="info">
              Más información
              <i class="material-icons">chevron_right</i>
              Prueba gratis <sup> 2</sup>
              <i class="material-icons">call_made</i>
            </h2>
          </div>
          <img
            className="img-one"
            src="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/images%2Fone.JPG?alt=media&token=0b453bed-6e2b-4f8b-8a6d-f28d8936223a"
            alt=""
          />
        </div>
      </div>
      <div className="lastcard">
        <div className="cards-black">
          <div className="item-scroll">
            <img
              className="movie"
              src="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/movies%2Fmovie1.jpg?alt=media&token=923739b6-6595-4c86-866e-eaa588576f5f"
              alt=""
            />
          </div>
          <div className="item-scroll">
            <img
              className="movie"
              src="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/movies%2Fmovie2.jpg?alt=media&token=95ba7f87-a8ee-4444-9096-dd2f77dbd35a"
              alt=""
            />
          </div>
          <div className="item-scroll">
            <img
              className="movie"
              src="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/movies%2Fmovie3.jpg?alt=media&token=1dad2374-9ed0-4d66-9d69-2d11f4b4a97d"
              alt=""
            />
          </div>
          <div className="item-scroll">
            <img
              className="movie"
              src="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/movies%2Fmovie4.jpg?alt=media&token=0639eca5-6529-4e25-9218-534dfb04edb6"
              alt=""
            />
          </div>
          <div className="item-scroll">
            <img
              className="movie"
              src="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/movies%2Fmovie5.jpg?alt=media&token=c7bce002-a66d-48a0-a566-31472046b482"
              alt=""
            />
          </div>
        </div>
        <div className="card-footer">
          <h1 className="headline" id="color-tv">
            <img
              className="icon-logo"
              src="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/icons%2Flogotipo-de-mac-os%20(2).png?alt=media&token=70ba0e2b-e306-48c1-b947-932b20019708"
              alt=""
            />{" "}
            TV{" "}
            <img id="tam-add"
              src="https://firebasestorage.googleapis.com/v0/b/react-fb-crud-c3729.appspot.com/o/icons%2Fplus.png?alt=media&token=95faf66e-2584-497b-916b-a544cbd0d3d1"
              alt=""
            />
          </h1>
          <h2 className="subhead" id="color-tv">
            Obtén un año de Apple TV + gratis al comprar un dispositivo Apple.
            <sup>3</sup>
          </h2>
          <h2 className="info-color">
            Más información
            <i class="material-icons">chevron_right</i>
            Prueba gratis
            <i class="material-icons">call_made</i>
          </h2>
        </div>
      </div>
    </div>
  );
}
