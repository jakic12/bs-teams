import React, { Component } from 'react'
import '../styles/topMenu.scss'
import '../styles/shared.scss';
import '../styles/featureList.scss';


export default ({content, title, style, id}) => {
    return (
        <div
            id={id} className="featureList" style={style}>
            <div className="content">
                <div className="header">
                    <div className="title">
                        <h1 className={'bigDarkTitle'}>{title}</h1>
                    </div>
                </div>
                <div className="body">
                    <ul>
                        {content.map((feature,i) => 
                            <li className={'featureListItem'} key={i}>
                                <img className={'img'} src={feature.icon} alt='logo'/>
                                <div className="titleDesc">
                                    <div className={'mediumDarkTitle'}>{feature.title} </div>
                                    <div className={'darkParagraph'}>{feature.desc}</div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
};