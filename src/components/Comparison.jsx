import React, {useState} from "react";
import "../styles/comparison.scss"
import '../styles/shared.scss'
import posed, {PoseGroup} from 'react-pose';

const Image = posed.img({
    hiddenTop: {
        y: 150,
        opacity: 0,
        transition: { duration: 1200 }
    },
    visibleTop: {
        y: 100,
        opacity: 1,
        transition: { duration: 1200 }
    },
    hiddenBottom: {
        y: 100,
        opacity: 0,
        transition: { duration: 800 }
    },
    visibleBottom: {
        y: -50,
        opacity: 1,
        transition: { duration: 1500 }
    },
});

const LeftDiv = posed.div({
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1000
        }
    },
    hidden: {
        opacity: 1,
        x: -500,
        transition: {
            duration: 1000
        }
    },
});

export default ({id, config, teamsLogo, animationState, topAnimationTriggerState, bottomAnimationTriggerState, description, title, isMobile, style}) => {
    return (
        <div id={id} className={'comparisonView'}
            style={style}>
            <LeftDiv id="left"
                pose={isMobile || animationState >= topAnimationTriggerState ? 'visible' : 'hidden'}>
                <h2 className={'bigDarkTitle'}>{title}</h2>
                <p className={'darkParagraph'}>{description}</p>
            </LeftDiv>
            <div id="right">
                <div id="top">
                    <PoseGroup>
                        {config.map((ele, index) => (
                            <div key={index} className={"imageWrapper"}>
                                <Image
                                    key={index}
                                    className={"comparisonImg"}
                                    src={ele.img}
                                    alt={ele.name}
                                    pose={isMobile ? 'hiddenTop' : ((animationState >= topAnimationTriggerState && animationState < bottomAnimationTriggerState) ? "visibleTop" : "hiddenTop")}
                                />
                            </div>
                        ))}
                    </PoseGroup>
                </div>
                <div id="down">
                    <Image
                        id={"teamsLogo"}
                        src={teamsLogo}
                        alt={"teams"}
                        pose={(isMobile ? 'visibleBottom' : (animationState >= bottomAnimationTriggerState ? "visibleBottom" : "hiddenBottom"))}
                    />
                </div>
            </div>
        </div>
    )
}