import React, { Component } from 'react'
import '../styles/firstRow.scss'
import Button from '../components/Button'


export default ({title, subtitle, description, btnTitle, onClick, bigLogo, smallLogo, style}) => {
    return (
        <div className="homeLandingViewContainer" style={style}>
            <div className="innerTextContainer">
                <h1 style={{fontSize: 50}} className={'bigTitle bigLightTitle'}>{title}</h1>
                <h3 style={{fontSize: 22}} className={'smallTitle mediumLightTitle'}>{subtitle}</h3>
                <p className={'smallMargin lightParagraph'}>{description}</p>
                <div className="btnWrapper">
                    <Button
                        title={btnTitle}
                        onClick={onClick}/>
                </div>
            </div>
            <div className="innerImageContainer">
              <img src={bigLogo} className="bigLogo"/>
              <img src={smallLogo} className="smallLogo"/>
            </div>
        </div>
    )
}