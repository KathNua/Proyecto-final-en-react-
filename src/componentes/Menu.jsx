import React from "react";
import "./menu.css";

//props items
function Menu({items }) {
    return(
        <nav className="menu-conteiner">
            <ul className="menu-lista">
                {items.map((item, index)=> (
                    <li key={index}>
                        <a href={item.link} className="menu-item">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;