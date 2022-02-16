import React, {useState} from "react";
import Card from "./Card";


export default function NewPlayer({handleAdd}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [newPlayer, setNewPlayer] = useState('')
    
    function handleSubmit(e){
        e.preventDefault()
        console.log(
            `First Name: ${firstName}`,
            `Last Name: ${lastName}`
        )
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${firstName}%20${lastName}`)
        .then(r => r.json())
        .then(r => setNewPlayer(r.player[0]))
        .catch(() => alert('Search not valid, try again!'))
    }
   
    return (
        <React.Fragment>
            <h1>Let's Add Some More Players!</h1>
            <h3>Search for your favorite player:</h3>
            <form className="ui form" onSubmit={e => handleSubmit(e)}>
                <div className="field">
                    <label>First Name</label>
                    <input type="text" name="first-name" placeholder="First Name" onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" name="last-name" placeholder="Last Name" onChange={e => setLastName(e.target.value)}/>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
            {newPlayer? <Card className="ui middle aligned center" handler={handleAdd} name={newPlayer.strPlayer} club={newPlayer.strTeam} country={newPlayer.strNationality} img1={newPlayer.strThumb} img2={newPlayer.strRender} uniqueId={newPlayer.idPlayer} isNew={true}/>:null}
        </React.Fragment>
    )
}