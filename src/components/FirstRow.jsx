import React, { Component } from 'react'
import '../styles/firstRow.scss'
import '../styles/shared.scss'
import Button from '../components/Button'


export default ({title, description, btnTitle, onClick, bigLogo, smallLogo, style}) => {
    return (
        <div className="homeLandingViewContainer" style={style}>
            <div className="innerTextContainer">
                <h1 className={'btMargin bigLightTitle'}>{title}</h1>
                <h3 className={'btMargin mediumLightTitle'}>{subtitle}</h3>
                <p className={'btMargin lightParagraph'}>{description}</p>
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