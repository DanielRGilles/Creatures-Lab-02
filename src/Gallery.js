import React, { Component } from 'react'
import creatures from './data.js'
import './App.css';
import Header from './components/Header.js';
import Dropdown from './components/Dropdown.js';
import ImageList from './components/ImageList.js';
export default class Gallery extends Component {
  state = {
    keyword: '',
    horns: '',
    type: ''
  }
  handleChange = (e) => {
    this.setState({ keyword: e.target.value });
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
        <Dropdown options={['narwhal',
             'rhino',
             'unicorn',
             'unilego',
             'triceratops',
             'markhor',
             'mouflon',
             'addax',
             'chameleon',
             'lizard',
             'dragon']} />
        </select>
        <label> Or  Number of horns  </label>
        <select onChange={this.handleHornChange}>
        <Dropdown options={['1','2','3','100'
             ]} /> </select>
        <label> Or  Type of Creature  </label>
        <select onChange={this.handleTypeChange}>
        <Dropdown options={['mythical','living','extinct'
             ]} />
       </select>
        </div>
        <ImageList typeFiltered= {typeFiltered}/>
      
      </div>
    )
  }
}

