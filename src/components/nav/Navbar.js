import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <header className="navbar">
            <ul className="nav_list">
                <div className="nav_item">
                    <Link to="/games">Games</Link>
                </div>
            </ul>
        </header>
    )
}
