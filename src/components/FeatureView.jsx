import React, { Component } from 'react'
import '../styles/feature-view.scss'
import '../styles/shared.scss';
import ReactPlayer from 'react-player';


export default ({id, icon, isMobile, flip = false, title, textItems, video, style}) => {
    if (flip && !isMobile) {
        return (
            <div style={style} id={id} className="featureViewContainer">
                <div className="videoContainer">
                    <ReactPlayer
                        loop={true}
                        playing={true}
                        className='react-player'
                        url={video}
                        width='100%'
                        height='100%'
                    />
                </div>
                <div className="textContainer">
                    <div className="title mediumRedTitle">{title}</div>
                    <ul className={'list'}>
                        {textItems.map((text, index) => (
                            <li key={index} className={"listItem"}>
                                <div className='listInnerLeft'>
                                    <img src={icon} alt={"checkbox"}/>
                                </div>
                                <div className='listInnerRight'>
                                    <p className={'darkParagraph'}>{text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    } else {
        return (
            <div style={style} id={id} className="featureViewContainer">
                <div className="textContainer">
                    <div className={"title mediumRedTitle"}>{title}</div>
                    <ul className={'list'}>
                        {textItems.map((text, index) => (
                            <li key={index} className={"listItem"}>
                                <div className='listInnerLeft'>
                                    <img src={icon} alt={"checkbox"}/>
                                </div>
                                <div className='listInnerRight'>
                                    <p className={'darkParagraph'}>{text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="videoContainer">
                    <ReactPlayer
                        loop={true}
                        playing={true}
                        className='react-player'
                        url={video}
                        width='100%'
                        height='100%'
                    />
                </div>
            </div>
        )
    }
}