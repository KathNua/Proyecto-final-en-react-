import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
//importacion del componente y las paginas 
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Inicio from "./paginas/Inicio";
import Canciones from "./paginas/Canciones";
import Albumes from "./paginas/Albumes";


function App(){
  return(
    <Router> {/* Habilita la navegacion envolviendo todo con router */}
      <Header/> {/* mostrar el header en todas nuestras paginas */}
      <Routes> {/* Definir las rutas de la app */}
      {/*rutas de las paginas :) */}
      <Route path="/" element={<Inicio />} />
      <Route path="/albumes" element={<Albumes />} />
      <Route path="/canciones" element={<Canciones />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;