import React, { Component } from 'react'
import Dinner from './Dinner'

class DinnerList extends Component {

    render(){
        let dinners = this.props.dinners.map((dinner, num) => {
            return(
                <li key={num}>
                    <Dinner name={dinner}/>
                </li>
            );
        })
    
        return(
            <div className='dinner-list'>
                <h1 className='main-header'>Dinners for the week</h1>
                <div className='dinner-boxes'>
                    <ol>{dinners}</ol>
                </div>
            </div>
        );
    }
}

export default DinnerList;