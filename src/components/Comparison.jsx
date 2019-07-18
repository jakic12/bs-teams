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
        <div
            id={id}
            style={isMobile ?
                {display: "flex", flexDirection: "column", ...style} :
                {display: "flex", flexDirection: "row", ...style}
            }>
            <LeftDiv
                id="left"
                pose={isMobile || animationState >= topAnimationTriggerState ? 'visible' : 'hidden'}
                style={isMobile ?
                    {width: "100%", marginBottom: 40} :
                    {width: "30%", marginLeft: 80}
                }>
                <div>
                    <h2 className={'bigDarkTitle'}>{title}</h2>
                    <p className={'darkParagraph'}>{description}</p>
                </div>
            </LeftDiv>
            <div
                id="right"
                style={isMobile ?
                    {width: "100%"} :
                    {width: "70%"}
                }>
                <div id="top">
                    <PoseGroup>
                        {config.map((ele, index) => (
                            <div key={index} style={{textAlign: "center",width: "20%", margin: "auto", display: "inline-block"}} className={"imageWrapper"}>
                                <Image
                                    key={index}
                                    className={"comparisonImg"}
                                    src={ele.img}
                                    alt={ele.name}
                                    style={{margin: "auto", maxWidth: "60px"}}
                                    pose={isMobile ? 'hidden' : (animationState >= topAnimationTriggerState && animationState < bottomAnimationTriggerState) ? "visibleTop" : "hiddenTop"}
                                />
                            </div>
                        ))}
                    </PoseGroup>
                </div>
                <div
                    id="down"
                    style={isMobile ?
                        {left: 0, right: 0} :
                        {right: 0}
                    }>
                    <Image
                        id={"teamsLogo"}
                        src={teamsLogo}
                        alt={"teams"}
                        pose={(isMobile ? 'visible' : (animationState >= bottomAnimationTriggerState ? "visibleBottom" : "hiddenBottom"))}
                        style={isMobile ? {width: '100%'} : {display: "block", margin: "auto"}}
                    />
                </div>
            </div>
        </div>
    )
}