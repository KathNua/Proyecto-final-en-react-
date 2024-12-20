import React from "react";
import "./canciones.css";
import Formulario from "../componentes/Formulario";

function Canciones() {
  const canciones = [
    {
      album: "Carmesí",
      canciones: [
        {
          titulo: "Plural Siendo Singular",
          enlace: "https://youtu.be/1YdzTJNmiLE?si=EZkdDr7c2CyR_VIS",
        },
        {
          titulo: "Final Ruin",
          enlace: "https://youtu.be/EmsUCar_opM?si=UR6257ns-pPqUCXi",
        },
        {
          titulo: "Sinmigo",
          enlace: "https://youtu.be/s1tgsF9THEs?si=voRma3JtNBoyO0Nf",
        },
      ],
    },
    {
      album: "Noche",
      canciones: [
        {
          titulo: "Sonámbulo",
          enlace: "https://youtu.be/IaXqDm9sk_0?si=1YHOl8hHMXP3Vpqa",
        },
        {
          titulo: "Esta Noche es la Reunión",
          enlace: "https://youtu.be/IRTTduNz_Bg?si=OHwESpofoZkJpwb2",
        },
        {
          titulo: "Noche de Brujas",
          enlace: "https://youtu.be/qF6CDiPb488?si=cLj1JelloLypW8Fr",
        },
      ],
    },
    {
      album: "Alba",
      canciones: [
        {
          titulo: "Padre Nuestro",
          enlace: "https://youtu.be/g8A4vVeDkRI?si=GatSXeAWjfDMkwHL",
        },
        {
          titulo: "Los de Septiembre",
          enlace: "https://youtu.be/F9bEBqdlOLY?si=3KqoxnzRIKeeWsex",
        },
        {
          titulo: "Willkommen",
          enlace: "https://youtu.be/R4AYIpT9l3E?si=6PvpDdiDnnzOjPHH",
        },
      ],
    },
    {
      album: "Psalmo",
      canciones: [
        {
          titulo: "Lamentable",
          enlace: "https://youtu.be/gsFDLaXkyGA?si=HLWbpAwaOIwM3cxR",
        },
        {
          titulo: "Violencia",
          enlace: "https://youtu.be/u9V9JDWK6ck?si=i1wv2TLNO3XFgkqq",
        },
        {
          titulo: "Sin Ampesand",
          enlace: "https://youtu.be/_e4B___WhJs?si=1XBF1QZF7Z-WZl6Z",
        },
      ],
    },
    {
      album: "Giallo",
      canciones: [
        {
          titulo: "Cerraron Chipinque",
          enlace: "https://youtu.be/bE2xrS-rdPw?si=XMqQd5uPFJkhkbFY",
        },
        {
          titulo: "Documentales",
          enlace: "https://youtu.be/AXq8QpUJ5oQ?si=waa5TUCI-00wkU2P",
        },
        {
          titulo: "En vano",
          enlace: "https://youtu.be/3h3NSTyc6mM?si=i7CsCsxO3NCn1B8e",
        },
      ],
    },
    {
      album: "Sarajevo",
      canciones: [
        {
          titulo: "Hablemos del Campo",
          enlace: "https://youtu.be/WUCalXHdE9M?si=TuUTBE5AFjdUeNa6",
        },
        {
          titulo: "Día de Mayo",
          enlace: "https://youtu.be/RvEYjyCf2J8?si=hF2wDIIA9vj6xfdB",
        },
        {
          titulo: "Baila Conmigo",
          enlace: "https://youtu.be/7H6ovmkw4iU?si=hvt-pcpAp5NM9YFB",
        },
      ],
    },
  ];

  return (
    <div className="canciones-contenedor">
      <h2>Las Mejores Canciones de José Madero</h2>
      {canciones.map((album, index) => (
        <div key={index} className="album-canciones">
          <h3>{album.album}</h3>
          <ul>
            {album.canciones.map((cancion, i) => (
              <li key={i}>
                <a href={cancion.enlace} target="_blank" rel="noopener noreferrer">
                  {cancion.titulo}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <Formulario />
    </div>
  );
}


export default Canciones;