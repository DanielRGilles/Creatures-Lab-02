import React, { Component } from 'react'
import images from './data.js'
import './App.css';

export default class App extends Component {
  state = {

  }
  render() {
    return (
      <div>
        <h1>Choose Image type</h1>
        <label for="horned">Choose a Horned Creature:</label>
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
        <button onClick={}>Show Creatures</button>
      </div>
    )
  }
}
