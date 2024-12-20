import React, { useState } from "react";
import "./Formulario.css";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [opcion, setOpcion] = useState("");
  const [sugerencia, setSugerencia] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    setMensaje(`Holiiiiiii!!, ¡Gracias ${nombre}! Has votado por "${opcion}" y sugerido: "${sugerencia}".`);
    setNombre("");
    setOpcion("");
    setSugerencia("");
  };

  return (
    <div className="formulario-contenedor">
      <h2>¡Dinos cuál es tu canción favorita de José o sugiérenos una!</h2>
      <form onSubmit={manejarEnvio} className="formulario">
        <div className="formulario-grupo">
          <label htmlFor="nombre">Tu Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Escribe tu nombre"
            required
          />
        </div>
        <div className="formulario-grupo">
          <label htmlFor="opcion">Canción Favorita:</label>
          <select
            id="opcion"
            value={opcion}
            onChange={(e) => setOpcion(e.target.value)}
            required
          >
            <option value="">Selecciona una canción</option>
            <option value="Plural Siendo Singular">Plural Siendo Singular</option>
            <option value="Final Ruin">Final Ruin</option>
            <option value="Padre Nuestro">Padre Nuestro</option>
            <option value="Dafne">Dafne</option>
            <option value="Teo el gato persa rinde sus declaraciones">Teo el gato persa rinde sus declaraciones</option>
            <option value="Cerraron chinpique">Cerraron chinpique</option>
            <option value="Otra Canción">Otra Canción</option>
          </select>
        </div>
        <div className="formulario-grupo">
          <label htmlFor="sugerencia">¿Tienes alguna sugerencia?</label>
          <textarea
            id="sugerencia"
            value={sugerencia}
            onChange={(e) => setSugerencia(e.target.value)}
            placeholder="Escribe aquí tu sugerencia"
          ></textarea>
        </div>
        <button type="submit" className="formulario-boton">
          Enviar
        </button>
      </form>
      {mensaje && <p className="mensaje-gracias">{mensaje}</p>}
    </div>
  );
}

export default Formulario;
