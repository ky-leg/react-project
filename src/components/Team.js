import React from "react";
import "./Home.css";
import Card from "./Card"

export default function Team({cards, handleDelete}) {
    console.log(cards.map(player => {
        return player.img1
    }))
    const displayCards = cards.map(player => {
        return (
            <Card 
            key = {player.name}
            name = {player.name}
            club = {player.club}
            country = {player.country}
            img1 = {player.img1}
            img2 = {player.img2}
            id={player.id}
            handler={handleDelete}/>            
        )
    })
    return (
        <React.Fragment>
            <h1>Your Team!</h1>
            <div className="ui grid container center aligned four link cards">
                {displayCards}
            </div>
        </React.Fragment>
    )
    
    
}