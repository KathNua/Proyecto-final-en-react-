import React from "react";
import Menu from "./Menu";
import "./Header.css";

function Header() {
    const menuItems = [
        { name: "Inicio", link: "/"},
        { name: "Albumes", link: "/Albumes"},
        {name: "Canciones", link: "/Canciones"},
    ];

    return (
        <header className="header-conteiner">
            <h1 className="header-title">Bienvenido Pepe Madero Lovers, te quiero mucho</h1>
            {/*pasar el arreglo de elemnto como prop */}
            <Menu items={menuItems} />
        </header>
    );
}

export default Header;