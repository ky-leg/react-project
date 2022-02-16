import React from "react";
import { NavLink } from "react-router-dom"

function Navbar(){
    return (

            <nav class="ui secondary pointing menu">
                <NavLink class="item" exact to="/Home">Home</NavLink>
                <NavLink class="item" to="/Team">Team</NavLink>
                <NavLink class="item" to="/NewPlayer">Add Players</NavLink>
            </nav>
        
        
    );
}

export default Navbar