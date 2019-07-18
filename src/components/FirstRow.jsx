import React, { Component } from 'react'
import '../styles/firstRow.scss'
import Button from '../components/Button'


export default ({title, subtitle, description, btnTitle, onClick, bigLogo, smallLogo, style}) => {
    return (
        <div className="firstRow" style={style}>
            <div className="left">
                <h1 className={'btMargin bigLightTitle'}>{title}</h1>
                <h3 className={'btMargin mediumLightTitle'}>{subtitle}</h3>
                <p className={'btMargin lightParagraph'}>{description}</p>
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