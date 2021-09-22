import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
        
                <>
                    <option value=''>All</option> 
                    {
                        this.props.options.map(optionName => 
                        <option value= {optionName}> {optionName.charAt(0).toUpperCase() + optionName.slice(1)}
                        </option>)
                    }
                    
                </>
            
        )
    }
}
                    