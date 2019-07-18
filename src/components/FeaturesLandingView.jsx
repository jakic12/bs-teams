import React, { Component } from 'react'
import '../styles/featuresLandingView.scss'
import '../styles/shared.scss'


export default ({title, subtitle, style}) => {
    return (
        <div className={'featuresLandingViewContainer'}>
            <div className={'featuresInnerTopContainer'}>
                <h1 style={{fontSize: 26}} className={'bigLightTitle'}>{title}</h1>
                <h3 className={'mediumLightTitle'}>{subtitle}</h3>
            </div>
        </div>
    )
}