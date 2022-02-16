import React from "react";


function Card({name, club, country, img1, img2, isNew, id, uniqueId, handler}){

    function handleEvent(){
        console.log(`is new is ${isNew} and name is ${name}`)
        if(isNew){
            handler(name, club, country, img1, img2, uniqueId)
        }
        if(!isNew){
            handler(id, name)
        }
    }

    return(
        <div className="ui card">
            <div className="ui slide reveal image">
                <img src={img1} alt="pic1" className="visible content"/>
                <img src={img2} alt="pic2" className="hidden content"/>
            </div>
            <div className="content">
                <a className="header">{name}</a>
                <div className="meta">
                <span className="date">Club: {club}</span>
                <br/>
                <span className="date">Country: {country}</span>
                </div>
            </div>
            <div className="extra content">
                <button 
                className={isNew? "ui green button":"ui red button"} 
                onClick={handleEvent}>
                {isNew? 'Add Player':'Remove Player'}
                </button>
            </div>
        </div>
    )
}

export default Card
            
            