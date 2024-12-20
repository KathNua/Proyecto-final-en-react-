import React from "react";
import "./albumes.css";

function Albumes() {
    const albumes = [
      {
        titulo: "Carmesí",
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/c6/28/d4/c628d4d8-e012-5a5b-e459-6e07c317a782/00602557227444.rgb.jpg/600x600bf-60.jpg",
        anio: 2016,
        inspiracion:
          '"Carmesí" es el disco más íntimo de José Madero, porque explora sus pensamientos con profundidad poética y literaria, inspirado por la tragedia y el drama...',
      },
      {
        titulo: "Noche",
        imagen: "data:image/jpeg;base64,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",
        anio: 2017,
        inspiracion:
          'El disco se enfoca más en la guitarra eléctrica, lo que es muy distinto a los sonidos de "Carmesí", que eran principalmente piano y una experimentación de ritmos...',
      },
      {
        titulo: "Alba",
        imagen: "https://ballenarecords.com/cdn/shop/products/D_NQ_NP_785088-MLM48293413832_112021-O_grande.jpg?v=1679463135",
        anio: 2018,
        inspiracion:
          'En una entrevista, José Madero define "Alba" no solo como una Oda a la Nostalgia, sino como un reflejo de recuerdos de infancia...',
      },
      {
        titulo: "Psalmo",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-7PgWJG3Kw2AgJ2LLdfNtwDY-acHjKjmcdw&s",
        anio: 2019,
        inspiracion:
          "El álbum Psalmos de José Madero es una reflexión sobre la decadencia humana, la pérdida de fe y la búsqueda de la felicidad.",
      },
      {
        titulo: "Giallo",
        imagen: "https://i.scdn.co/image/ab67616d0000b273242ad5bbebcb2b2c84625b8e",
        anio: 2022,
        inspiracion:
          "José Madero se inspiró en su propia muerte para escribir las canciones del álbum Giallo. Reflexionó sobre el amor, el futuro y la fatalidad...",
      },
      {
        titulo: "Sarajevo",
        imagen: "https://cdn-images.dzcdn.net/images/cover/2154a337a9683e5cdb353e4bc05a74d2/0x1900-000000-80-0-0.jpg",
        anio: 2024,
        inspiracion:
          '“Sarajevo” abarca temáticas desde crisis existenciales hasta autosabotaje, transformándose en un disco personal que refleja las vivencias del artista.',
      },
    ];

    return (
        <div className="albumes-conteiner">
            <h2>Álbumes de José Madero</h2>
            <div className="albumes-lista">
                {albumes.map((album, index ) => (
                    <div key={index} className="album-item">
                        <img src={album.imagen} alt={album.titulo} className="album-image" />
                        <h3>{album.titulo}</h3>
                        <p><strong>Año de lanzamiento:</strong> {album.anio}</p>
                        <p><strong>Inspiración:</strong> {album.inspiracion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Albumes;