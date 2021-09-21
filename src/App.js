import React, { Component } from 'react'
import creatures from './data.js'
import './App.css';
import Header from './components/Header.js';

export default class App extends Component {
  state = {
    keyword: '',
    horns: '',
    type: ''
  }
  handleChange = (e) => {
    this.setState({ keyword: e.target.value })
}
  handleHornChange = (e) => {
  this.setState({ horns: e.target.value })
}
handleTypeChange = (e) => {
  this.setState({ type: e.target.value })
}
  render() {
    const selectedCreatures = creatures
    .filter(creature => {
      if (!this.state.keyword){
    return true }
     return (creature.keyword === this.state.keyword) });
     
     const moreFiltered =
     selectedCreatures
     .filter(selectedCreatures => {
      if (!this.state.horns){
    return true }
     return (selectedCreatures.horns === Number(this.state.horns))})
     
     const typeFiltered =
     moreFiltered
     .filter(moreFiltered => {
      if (!this.state.type){
    return true }
     return (moreFiltered.type === this.state.type)})

    return (
      <div>
        <Header/>
        <div className='creature-select'>
        
        <label>Choose a Horned Creature: By Name  </label>
       <select onChange={this.handleChange}> 
        <option value=''>All</option>
        <option value='narwhal'>Narwhal</option>
        <option value='rhino'>Rhino</option>
        <option value='unicorn'>Unicorn</option>
        <option value='unilego'>Unilego</option>
        <option value='triceratops'>Triceratops</option>
        <option value='markhor'>Markhor</option>
        <option value='mouflon'>Mouflan</option>
        <option value='addax'>Addax</option>
        <option value='chameleon'>Chameleon</option>
        <option value='lizard'>Lizard</option>
        <option value='dragon'>Dragon</option>
        </select>
        <label> Or  Number of horns  </label>
        <select onChange={this.handleHornChange}> 
        <option value=''>All</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='100'>100</option>
        </select>
        <label> Or  Type of Creature  </label>
        <select onChange={this.handleTypeChange}> 
        <option value=''>All</option>
        <option value='living'>living</option>
        <option value='mythical'>mythical</option>
        <option value='extinct'>extinct</option>
        </select>
        </div>
        <ul className='list'>
           {typeFiltered.map(creature => {
            return (
          <li className='creature' key={creature.url}>
              <div className='creature-neem'>{creature.title}</div>  <br></br> 
              <img src={creature.url} alt='horned creature'/><br></br>
              <div className='creature-deets'>{creature.description}</div>
          </li>

             )})}
        </ul>
      </div>
    )
  }
}
