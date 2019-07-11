import React, { Component } from 'react'
import pose from "react-pose";
import '../styles/LeftRightContainer.scss'

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

const RightImage = pose.img({
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

const LeftImage = pose.img({
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

export default ({id, isMobile, flip = false, title, description, image, animationState}) => {
    return (
        <div id={id} className="leftRightContainer">
            {(flip && !isMobile) && (
                <div className="containerWrapper">
                    <div className="half">
                        <Title pose={animationState > 1 ? "open" : "closed"} className="title">{title}</Title>
                        <Text pose={animationState > 1 ? "open" : "closed"} className="text">{description}</Text>
                    </div>
                    <div className="half">
                        <LeftImage pose={animationState > 1 ? "open" : "closed"} className="TeamsImg" src={image} alt="TeamsImg" />
                    </div>
                </div>
            )}
            {(!flip || isMobile) && (
                <div className="containerWrapper">
                    <div className="half">
                        <RightImage pose={animationState > 0 ? "open" : "closed"} className="TeamsImg" src={image} alt="TeamsImg" />
                    </div>
                    <div className="half">
                        <Title pose={animationState > 0 ? "open" : "closed"} className="title">{title}</Title>
                        <Text pose={animationState > 0 ? "open" : "closed"} className="text">{description}</Text>
                    </div>
                </div>
            )}
        </div>
    )
}