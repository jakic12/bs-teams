import React, { Component } from 'react'
import '../styles/topMenu.scss'
import Button from '../components/Button'
import reactSvg from 'react-svg';
import '../styles/featureList.scss';

export default ({content, title, style, id, buttonText, subtitle}) => {
    return (
        <div id={id} style={style} className="featureList" style={style}>
            <div className="content">
                <div className="header">
                    <div className="title">
                        <h1>{title}</h1>
                    </div>
                    <div className="subtitle">
                        {subtitle}
                    </div>
                </div>
                <div className="body">
                    <ul>
                        {content.map((feature,i) => 
                            <li key={i}>
                                <img className={'img'} src={feature.icon} alt='logo'/>
                                <div className="titleDesc">
                                    <div className={'title'}>{feature.title} </div>
                                    <div className={'desc'}>{feature.desc}</div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="foot">
                    <div className="buttonWrapper">
                        <Button title={buttonText} style={{backgroundColor:`#c51e2b`, color:`white`}}/>
                    </div>
                </div>
            </div>
        </div>
    )
};