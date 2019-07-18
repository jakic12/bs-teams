import React, { Component } from 'react'
import '../styles/contacts.scss'
import Button from './Button.jsx'
import { Link } from 'react-router-dom';

export default class Contacts extends Component{
    render(){
            return (
             <div className="contacts" style={this.props}>
                 <div className="contentWrapper">
                    <div className="content">
                        <p className="p1">Spremenite vaše poslovanje že danes</p>
                        <p className="p2">Stopite v kontakt z nami</p>
                        <div className="buttonMumbleWrapper">
                            <Link to={`/contact`}>
                                <Button 
                                    onClick={this.props.onButtonClick}
                                    title={"KONTAKTI"}
                                />
                            </Link>
                        </div>
                    </div>
                 </div>
             </div>   
        )
    } 
}