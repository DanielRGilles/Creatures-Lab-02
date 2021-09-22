import React, { Component } from 'react'
import Header from './components/Header';
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <div>
              <Header/>
              <div className='home-body'>
             <div><a  href='/Gallery'><img className='horns'src='BigolHorns.jpg' alt='Longhorn steer'></img></a></div>
             </div>
            </div>
        )
    }
}
