import React, {useState} from "react";
import "../styles/comparison.scss"
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
        transition: { duration: 1000 }
    },
});

export default ({id, config, teamsLogo, leftIconsSize, rightIconSize, animationState, description, title, isMobile, style}) => {
    return (
        <div
            id={id}
            style={isMobile ?
                {display: "flex", flexDirection: "column", ...style} :
                {display: "flex", flexDirection: "row", ...style}
            }>
            <div
                id="left"
                style={isMobile ?
                    {width: "100%", marginBottom: 40} :
                    {width: "30%", marginLeft: 80}
                }>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
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
                                    pose={(animationState > 0 && animationState < 2) ? "visibleTop" : "hiddenTop"}
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
                        pose={(animationState > 1 ? "visibleBottom" : "hiddenBottom")}
                        style={{display: "block", margin: "auto"}}
                    />
                </div>
            </div>
        </div>
    )
}