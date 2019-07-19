import React, { Component } from 'react'
import '../styles/featuresLandingView.scss'
import '../styles/shared.scss'


export default ({title, subtitle, style}) => {
    return (
        <div className={'featuresLandingViewContainer'}>
            <div className={'featuresInnerTopContainer'}>
                <h1 style={{fontSize: 50}} className={'bigLightTitle'}>{title}</h1>
                <h3 style={{fontSize: 25}} className={'mediumLightTitle'}>{subtitle}</h3>
            </div>
        </div>
    )
}