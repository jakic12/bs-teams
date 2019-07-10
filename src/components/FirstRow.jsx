import React, { Component } from 'react'
import '../styles/firstRow.scss'
import Button from '../components/Button'


export default ({title, description, btnTitle, onClick, bigLogo, smallLogo}) => {
    return (
        <div className="firstRow">
            <div className="left">
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="btnWraper">
                    <Button
                        title={btnTitle}
                        onClick={onClick}/>
                </div>
            </div>
            <div className="right">
                <img src={bigLogo} className="telefonLaptop"></img>
                <img src={smallLogo} className="telefon"></img>
            </div>
        </div>
    )
}