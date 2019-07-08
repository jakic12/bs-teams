import React, { Component } from 'react'
import '../styles/TopMenu.scss'
import bslogo from '../res/img/bs_power_bel_croped.png'

class TopMenu extends Component{
    render(){
        return (
            <div className="topBar">
                <div className="innerBarWrapper">
                    <div className="innerBar">
                        <img className="bslogo" src={bslogo} alt="Business Solutions logo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopMenu;