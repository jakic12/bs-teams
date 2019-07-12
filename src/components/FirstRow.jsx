import React, { Component } from 'react'
import '../styles/firstRow.scss'
import '../styles/shared.scss'
import Button from '../components/Button'


export default ({title, description, btnTitle, onClick, bigLogo, smallLogo, style}) => {
    return (
        <div className="firstRow" style={style}>
            <div className="left">
                <h1 className={'bigLightTitle'}>{title}</h1>
                <p className={'lightParagraph'}>{description}</p>
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