import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
        <NavLink className="navbar-item" to="homepage">Homepage</NavLink>    
        <NavLink className="navbar-item" to="posts">Posts</NavLink>
        <NavLink className="navbar-item" to="photos">Photos</NavLink>
        <NavLink className="navbar-item" to="contacts">Contacts</NavLink>
        </div>
    )
}

export default Navbar;