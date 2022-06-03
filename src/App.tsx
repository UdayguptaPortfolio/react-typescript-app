import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';


export interface IState{
  people:{
    name:string,
    age:number,
    image:string,
    notes?:string
  }[]
}
function App() {

  const [people,setPeople]=useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      notes: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      image: "https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg"
    }
  ]);
  return (
    <div className="App">
      <h1>Peoples that are already invited in my party....</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
