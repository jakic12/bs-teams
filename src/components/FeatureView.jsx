import React, { Component } from 'react'
import posed, {PoseGroup} from "react-pose";
import '../styles/feature-view.scss'
import '../styles/shared.scss';
import ReactPlayer from 'react-player';


const List = posed.ul({
    closed: {
        x: -100,
        opacity: 0,
        transition: { duration: 1000 }
    },
    open: {
        x: 0,
        opacity: 1,
        transition: { duration: 1000 }
    }
});

const Item = posed.li({
    open: { y: 0, opacity: 1 },
    closed: { y: 20, opacity: 0 }
});

const Title = posed.h1({
    open: {
        y: 0,
        opacity: 1
    },
    closed: {
        y: 40,
        opacity: 0
    }
});

const RightVideo = posed.div({
    open: {
        x: 0,
        opacity: 1,
        transition: { duration: 1000 }
    },
    closed: {
        x: -40,
        opacity: 0,
        transition: { duration: 1000 }
    }
});

const LeftVideo = posed.div({
    open: {
        x: 0,
        opacity: 1,
        transition: { duration: 1000 }
    },
    closed: {
        x: 40,
        opacity: 0,
        transition: { duration: 1000 }
    }
});

export default ({id, icon, isMobile, flip = false, title, textItems, video, animationState, style, animationTriggerState}) => {
    if (flip && !isMobile) {
        return (
            <div style={style} id={id} className="featureViewContainer">
                <div className="videoContainer">
                    <RightVideo pose={isMobile || animationState > animationTriggerState ? "open" : "closed"}>
                        <ReactPlayer
                            loop={true}
                            playing={true}
                            className='react-player'
                            url={video}
                            width='100%'
                            height='100%'
                        />
                    </RightVideo>
                </div>
                <div className="textContainer">
                    <Title pose={isMobile || animationState > animationTriggerState ? "open" : "closed"} className="title mediumRedTitle">{title}</Title>
                    <List className={'list'} pose={animationState > animationTriggerState ? "open" : "closed"}>
                        <PoseGroup>
                            {textItems.map((text, index) => (
                                <Item
                                    key={index}
                                    className={"listItem"}
                                    style={{listStyleType: "none"}}
                                    pose={isMobile || animationState > animationTriggerState ? "open" : "closed"}>
                                    <img style={{width: 25}} src={icon} alt={"checkbox"}/>
                                    <p className={'darkParagraph'} style={{display: "inline", paddingLeft: 10}}>{text}</p>
                                </Item>
                            ))}
                        </PoseGroup>
                    </List>
                </div>
            </div>
        )
    } else {
        return (
            <div style={style} id={id} className="featureViewContainer">
                <div className="textContainer">
                    <Title pose={isMobile || animationState > animationTriggerState ? "open" : "closed"} className={"title mediumRedTitle"}>{title}</Title>
                    <List className={'list'} pose={isMobile || animationState > animationTriggerState ? "open" : "closed"}>
                        <PoseGroup>
                            {textItems.map((text, index) => (
                                <Item
                                    key={index}
                                    className={"listItem"}
                                    style={{listStyleType: "none"}}
                                    pose={isMobile || animationState > animationTriggerState ? "open" : "closed"}>
                                    <img style={{width: 25}} src={icon} alt={"checkbox"}/>
                                    <p className={'darkParagraph'} style={{display: "inline", paddingLeft: 10}}>{text}</p>
                                </Item>
                            ))}
                        </PoseGroup>
                    </List>
                </div>
                <div className="videoContainer">
                    <LeftVideo className={'video'} pose={isMobile || animationState > animationTriggerState ? "open" : "closed"}>
                        <ReactPlayer
                            loop={true}
                            playing={true}
                            className='react-player'
                            url={video}
                            width='100%'
                            height='100%'
                        />
                    </LeftVideo>
                </div>
            </div>
        )
    }
}