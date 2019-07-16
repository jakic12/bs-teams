import React, { Component } from 'react'
import '../styles/topMenu.scss'
import pose from 'react-pose';
import '../styles/shared.scss';
import '../styles/featureList.scss';

const Div = pose.div({
   show: {
       x: 0,
       opacity: 1,
       transition: {
           duration: 1000
       }
   },
    hidden: {
        x: -100,
        opacity: 0,
        transition: {
            duration: 1000
        }
    }
});

export default ({isMobile, content, title, style, id, animationState, animationTriggerState}) => {
    return (
        <Div
            pose={(isMobile || animationState > animationTriggerState) ? 'show' : 'hidden'}
            id={id} className="featureList" style={style}>
            <div className="content">
              <h1 className={'bigDarkTitle'}>{title}</h1>
                <div className="body">
                    <ul>
                        {content.map((feature,i) => 
                            <li key={i}>
                                <img className={'img'} src={feature.icon} alt='logo'/>
                                <div className="titleDesc">
                                    <div className={'smallDarkTitle'}>{feature.title} </div>
                                    <div className={'darkParagraph'}>{feature.desc}</div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </Div>
    )
};