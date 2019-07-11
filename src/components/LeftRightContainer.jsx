import React, { Component } from 'react'
import pose from "react-pose";
import '../styles/leftright-component.scss'
import ReactPlayer from 'react-player';

const Text = pose.p({
    open: {
        y: 0,
        opacity: 1,
        transition: { duration: 1000 }
    },
    closed: {
        y: 40,
        opacity: 0,
        transition: { duration: 1000 }
    }
});

const Title = pose.h1({
    open: {
        y: 0,
        opacity: 1
    },
    closed: {
        y: 40,
        opacity: 0
    }
});

const RightVideo = pose.div({
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

const LeftVideo = pose.div({
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

export default ({id, isMobile, flip = false, title, description, video, animationState, style}) => {
    return (
        <div style={style} id={id} className="leftRightContainer">
            {(flip && !isMobile) && (
                <div className="containerWrapper">
                    <div className="half">
                        <RightVideo className={'video'} pose={animationState > 1 ? "open" : "closed"}>
                            <ReactPlayer
                                loop={true}
                                playing={true}
                                className='react-player'
                                url={video}
                                width='90%'
                                height='90%'
                            />
                        </RightVideo>
                    </div>
                    <div className="half">
                        <Title pose={animationState > 0 ? "open" : "closed"} className="title">{title}</Title>
                        <Text pose={animationState > 0 ? "open" : "closed"} className="text">{description}</Text>
                    </div>
                </div>
            )}
            {(isMobile || !flip) && (
                <div className="containerWrapper">
                    <div className="half">
                        <Title pose={animationState > 1 ? "open" : "closed"} className="title">{title}</Title>
                        <Text pose={animationState > 1 ? "open" : "closed"} className="text">{description}</Text>
                    </div>
                    <div className="half">
                        <LeftVideo className={'video'} pose={animationState > 1 ? "open" : "closed"}>
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
            )}
        </div>
    )
}