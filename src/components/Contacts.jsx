import React, { Component } from 'react'
import '../styles/contacts.scss'


export default class Contacts extends Component{
    render(){
            return (
             <div className="contacts" style={this.props.style}>
                 <div className="contentWrapper">
                    <div className="content">
                        <p className="p1">Spremenite vaše poslovanje že danes</p>
                        <p className="p2">Stopite v kontakt z nami</p>
                        <button>KONTAKT</button>
                    </div>
                 </div>
             </div>   
        )
    } 
}