import React, { Component } from 'react'
import '../styles/footer.scss'
import BsLogo from '../res/img/BS logo_business solutions.png'

export default class Footer extends Component{
    render(){
            return (
                <div className="footer">
                    <div className="containerWrapper">
                        <div className="contentRow">
                            <img src={ BsLogo } className="logo" />  
                            <img src={ BsLogo } className="logo" />  
                        </div>
                        <div className="contentRow">
                            <img src={ BsLogo } className="logo" />   
                            <img src={ BsLogo } className="logo" />         
                        </div>
                        <div className="contentColumn">
                            <h3>PRODUKTI</h3>
                            <p>Microsoft Teams</p>
                            <p>PowerBi</p>
                        </div>
                    </div>
                </div>
        )
    } 
}