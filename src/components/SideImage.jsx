import React, { Component } from 'react'
import pose from 'react-pose';
import '../styles/sideImage.scss'


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

export default ({id, style, animationProgress, animationState, animationTriggerState, image}) => {
    console.log('animation state ', animationState);
    return (
        <div id={id} className="sideImage"  style={style}>
            {image && <div className={"image"}>
                <Image
                    i={animationProgress}
                    pose={animationState > animationTriggerState ? 'visible' : 'hidden'}
                    src={image} alt={"first image"} />
            </div>}
        </div>
    )
};