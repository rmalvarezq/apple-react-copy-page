import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <footer className="container-footer">
      <div className="footer-wrapper">
        <p>
          1. $4.99 al mes al finalizar el periodo de prueba gratis. Sin
          compromisos. El plan se renovará automáticamente hasta que se cancele.
          Los precios están expresados en dólares estadounidenses y pueden
          variar por país. Se requiere una tarjeta de crédito internacional para
          completar la suscripción.
        </p>
        <p>
          2. La prueba gratis de Apple One incluye sólo los servicios que no
          estés usando actualmente mediante una prueba gratis o suscripción. El
          plan se renovará automáticamente hasta que se cancele. Sujeto a
          restricciones y otros términos.
        </p>
        <p>
          3. Apple TV+ cuesta $4.99 al mes al finalizar el periodo de prueba
          gratis. Una suscripción por grupo de Compartir en Familia. Promoción
          válida durante 3 meses después de la activación de un dispositivo
          elegible. El plan se renovará automáticamente hasta que se cancele.
          Sujeto a restricciones y otros términos. Los precios están expresados
          en dólares estadounidenses y pueden variar por país. Se requiere una
          tarjeta de crédito internacional para completar la suscripción.
        </p>
        <div className="row">
          <div className="column">
            <h2>Para la empresa</h2>
            <a href="./">Mac</a>
            <a href="./">iPad</a>
            <a href="./">iPhone</a>
            <a href="./">Watch</a>
            <a href="./">TV</a>
            <a href="./">Music</a>
            <a href="./">AirPods</a>
            <a href="./">iPhod touch</a>
          </div>

          <div className="column">
            <h2>Servicios</h2>
            <a href="./">Apple Music</a>
            <a href="./">Apple Watch</a>
            <a href="./">Apple Arcade</a>
            <a href="./">iCloud</a>
            <a href="./">Apple One</a>
            <a href="./">Apple Books</a>
            <a href="./">App Store</a>
          </div>
          <div className="column">
            <h2>Acerca de Apple</h2>
            <a href="./">Newsroom</a>
            <a href="./">Directivos de Apple</a>
            <a href="./">Oportunidades de empleo</a>
            <a href="./">Inversionistas</a>
            <a href="./">Ética y cumplimiento de políticas</a>
            <a href="./">Eventos</a>
            <a href="./">Contactar a Apple</a>
          </div>
          <div className="column">
            <h2>Valores de Apple</h2>
            <a href="./">Accesibilidad</a>
            <a href="./">Medio Ambiente</a>
            <a href="./">Privacidad</a>
          </div>
          <div className="column">
            <h2>Cuenta</h2>
            <a href="./">Administrar tu Apple ID</a>
            <a href="./">iCloud.com</a>
          </div>
          <div className="column">
            <h2>Para la empresa</h2>
            <a href="./">Apple y la empresa</a>
          </div>
        </div>
        <div className="row1">
          <a href="./">
            <p id="color-p-footer">Busca un distribuidor</p>
          </a>
        </div>
        <div>
          <div className="row2">
            <p>Copyright © 2021 Apple Inc. Todos los derechos reservados.</p>
            <a href="./">Política de privacidad</a>
            <a href="./">Aviso legal</a>
            <a href="./">Mapa del sitio</a>
            <a href="./">América Latina y el Caribe</a>
            <a href="./">English</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
