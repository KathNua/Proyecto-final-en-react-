import React from "react";
import "./inicio.css";

function Inicio (){
    return(
        <div className="inicio-conteiner">
            <h1 className="titulo">"Todo sobre José Madero Vizcaino"</h1>
            <p className="biografia">
            José Madero Vizcaíno (Monterrey, 1 de septiembre de 1980), mejor conocido como Pepe Madero, es un cantante, compositor, escritor, productor y guitarrista mexicano. Es reconocido por ser el vocalista y líder de la banda mexicana de rock Panda, desde 1996, y por contar con un proyecto solista, iniciado en el año 2016.
            Desde pequeño fue familiarizándose con distintos géneros del rock, desde el glam rock hasta el punk rock, grunge, emo y rock alternativo. El gusto por esta música le llevó a aprender a tocar la guitarra a los 13 años con el fin de formar una banda, la cual surgió en 1996 con el nombre de "The Purgatory", y con influencias del grunge de los años 90', como Alice in Chains. Tras varios cambios de estilos y alineación, surgiría Panda al año siguiente.
            Además de la composición de canciones, José Madero ha incursionado en el mundo de la escritura, publicando su primer libro "Pensándolo Bien, Pensé Mal" en el año 2014, el cual consiste en una especie de revisión autobiográfica, un recuento de anécdotas personales y laborales. Dos años después lanzaría su segundo libro, "Odio Odiar", que cuenta con una colección de ensayos sobre diversos temas acerca del ser humano.
            </p>

            <div className="imagenes">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsOTED31pF6zVF2UPNF1Zfd5gISDNtXDfFQ&s" alt="Jose1" />
                <img src="https://i.pinimg.com/originals/d4/35/e5/d435e5a89e4255eaeb31da2031aaac7a.jpg" alt="Jose2" />
                <img src="https://i.pinimg.com/736x/56/f0/56/56f05625f0aa0a8816858a636cdbbcc3.jpg" alt="Jose3" />
                <img src="https://i.pinimg.com/736x/b1/a0/3b/b1a03bdbc68f4b67613f8efeebb3a8b5.jpg" alt="Jose4" />
                <img src="https://i.pinimg.com/736x/83/8f/04/838f04ea3ddd1607b93bf2322294515f.jpg" alt="Jose5" />
            </div>

        </div>
    );
}

export default Inicio;