
import '../App.css';
import React, {useState, useEffect} from "react";
import {Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Team from './Team';
import NewPlayer from './NewPlayer';

function App() {
  const [page, setPage] = useState("/")
  const [cards, setCards] = useState([])
  
  useEffect(() => {
      fetch('http://localhost:3001/cards')
      .then(r => r.json())
      .then(r => setCards(r))
  }, [])

  function handleDelete(id, name){
    const newCards = cards.filter(card => {
      return card.name !== name
    })
    console.log(newCards)
    fetch(`http://localhost:3001/cards/${id}`,
      {
          method: 'DELETE'
      })
    .then(setCards(newCards))
    console.log(`delete id ${name}`)
  }

  function handleAdd(name, club, country, img1, img2, id){
    const isOnTeam = !!cards.find(card => card.uniqueId ===id)
    if (!isOnTeam){
      const playerData = {
        name: name,
        club: club,
        country: country,
        img1: img1,
        img2: img2,
        uniqueId: id
      }
      
      fetch(`http://localhost:3001/cards`,
      {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(playerData)
      })
      .then(r => r.json())
      .then(r => setCards([...cards, r]))
    }
    else {
      alert('You cannot add a player twice!')
    }
  }

  return (
    <div className="App container py-4">
      <Navbar onChangePage={setPage}/>
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Team" element={<Team cards={cards} setCards={setCards} handleDelete={handleDelete} />}/>
        <Route path="/NewPlayer" element={<NewPlayer handleAdd={handleAdd}/>}/>
      </Routes>
    </div>
  );
}

export default App;
