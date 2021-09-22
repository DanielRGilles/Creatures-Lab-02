import React, { Component } from 'react'

export default class ImageList extends Component {
    render() {
        return (
            <>
                 <ul className='list'>
           {this.props.typeFiltered.map(creature => {
            return (
          <li className='creature' key={creature.url}>
              <div className='creature-neem'>{creature.title}</div>  <br></br> 
              <img src={creature.url} alt='horned creature'/><br></br>
              <div className='creature-deets'>{creature.description}</div>
          </li>
             )})}
        </ul> 
            </>
        )
    }
}
