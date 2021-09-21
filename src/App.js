import React, { Component } from 'react'
import creatures from './data.js'
import './App.css';
import Header from './components/Header.js';

export default class App extends Component {
  
  ShowCreatures = () => {
   const creatureEl = document.getElementById('horned')
   const choiceEl = creatureEl.options[creatureEl.selectedIndex].value
   
   {creatures.filter(creature => creature.keyword === choiceEl).map(creature => {
     return (
   <li className='creature' key={creature.url}>
       {creature.title}  <br></br> 
       <img src={creature.url} alt='horned creature'/><br></br>
       {creature.description}
   </li>

      )})
  
  }

  render() 
  {
    return (
      <div>
        <Header/>
        <h1>Choose Image type</h1>
        <label>Choose a Horned Creature:</label>
       <select id='horned' name='horned'> 
        <option value=''></option>
        <option value='narwhal'>Narwhal</option>
        <option value='rhino'>Rhino</option>
        <option value='unicorn'>Unicorn</option>
        <option value='unilego'>Unilego</option>
        <option value='tricerotops'>Tricerotops</option>
        <option value='markhor'>Markhor</option>
        <option value='mouflon'>Mouflan</option>
        <option value='addax'>Addax</option>
        <option value='chameleon'>Chameleon</option>
        <option value='lizard'>Lizard</option>
        <option value='dragon'>Dragon</option>
        </select>
        <button onClick={this.ShowCreatures}>Show Creatures</button>
        <ul className='list'>
          
        </ul>
      </div>
    )
  }}