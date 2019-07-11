import React, { Component } from 'react'
import '../styles/contacts.scss'
import Button from './Button.jsx'

export default class Contacts extends Component{
    render(){
            return (
             <div className="contacts" style={this.props}>
                 <div className="contentWrapper">
                    <div className="content">
                        <p className="p1">Spremenite vaše poslovanje že danes</p>
                        <p className="p2">Stopite v kontakt z nami</p>
                        <Button 
                            onClick={() => alert("You clicked a button")}
                            title={"KONTAKTI"} />
                    </div>
                 </div>
             </div>   
        )
    } 
}