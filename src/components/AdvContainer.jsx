import React, { Component } from 'react'
import '../styles/advContainer.scss'
import mob from '../res/img/mobilnost.svg'
import pov from '../res/img/povezovanje.svg'
import viz from '../res/img/vizualizacija.svg'


class AdvContainer extends Component{
    render(){
        return (
            <div className="advContainer" style={this.props.style} id={this.props.id}>
                <div className="titleClass">
                    <h1 className="Contenttitle">Prednosti</h1>  
                </div>
                <div className="containerWrapper">
                    <div className="content">
                        <img src={ mob } className="logo" />
                        <h1 className="title">Mobilnost</h1>  
                        <p className="text">Možnost prikaza ažuriranih informacij na vseh vaših napravah.</p>
                    </div>
                    <div className="content">
                        <img src={ pov } className="logo" />
                        <h1 className="title">Povezovanje sistemov</h1>  
                        <p className="text">Združujte podatke iz različnih sistemov, ki so vam najbolj pomembni</p>
                    </div>
                    <div className="content">
                        <img src={ viz } className="logo" />
                        <h1 className="title">Pregledna vizualizacija</h1>  
                        <p className="text">Enostavno oblikovanje in urejanje preglednih nadzornih plošč</p> 
                    </div>
                </div>
            </div>
        )
    }
}

export default AdvContainer;