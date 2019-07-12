import React, { Component } from 'react'
import pose from 'react-pose';
import '../styles/planets.scss'


const Image = pose.img({
    move: {
        transition: ({ i }) => ({ x: i * 50 })
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1000
        }
    },
    hidden: {
        opacity: 1,
        x: 1000,
        transition: {
            duration: 1000
        }
    },
    props: { i: 0 }
});

export default ({id, style, animationProgress, animationState, animationTriggerState, firstImage, secondImage}) => {
    console.log('animation state ', animationState);
    return (
        <div id={id} className="planets"  style={style}>
            {firstImage && <div className={"redPlanet"}>
                <Image
                    i={animationProgress}
                    pose={animationState > animationTriggerState ? 'visible' : 'hidden'}
                    src={firstImage} alt={"red planet"} />
            </div>}
            {secondImage && <div className={"moon"}>
                <Image
                    i={animationProgress}
                    pose={animationState > animationTriggerState ? 'visible' : 'hidden'}
                    src={secondImage} alt={"red planet"} />
            </div>}
        </div>
    )
};