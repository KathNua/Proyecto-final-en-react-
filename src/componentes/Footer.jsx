import React from "react";
import "./Footer.css";

// Enlaces a redes sociales
function Footer() {
  return (
    <footer className="footer-contenedor">
      <div className="footer-contenido">
        <div className="footer-seccion">
          <h3>Contacto</h3>
          <p>Email: contacto@Teamojosemadero.com</p>
        </div>
        <div className="footer-seccion">
          <h3>Redes Sociales</h3>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/maderovizcainojose?locale=es_LA" target="_blank" rel="noopener noreferrer">
                <i className="facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jose_madero/" target="_blank" rel="noopener noreferrer">
                <i className="instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a href="https://x.com/jose_madero?t=IKKvY_ldtH5Oc1ZVpPv_6g&s=08" target="_blank" rel="noopener noreferrer">
                <i className="twitter (X)"></i> X
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-seccion">
          <h3>Sobre el Cantante</h3>
          <p>José Madero es un cantante y compositor mexicano, conocido por su estilo único y su impacto en la música moderna.</p>
        </div>
      </div>
      <p>&copy; 2024 José Madero. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
