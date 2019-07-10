import React, {useState} from "react";
import "../styles/comparison.scss"
import posed, {PoseGroup} from 'react-pose';

const Image = posed.img({
    hiddenTop: {
        x: -100,
        opacity: 0,
        transition: { duration: 1200 }
    },
    visibleTop: {
        x: 0,
        opacity: 1,
        transition: { duration: 1200 }
    },
    hiddenBottom: {
        y: 100,
        opacity: 0,
        transition: { duration: 800 }
    },
    visibleBottom: {
        y: -200,
        opacity: 1,
        transition: { duration: 1000 }
    },
});

export default ({config, teamsLogo, leftIconsSize, rightIconSize, animationState, description, title, isMobile}) => {
    return (
        <div
            id="comparison"
            style={isMobile ?
                {display: "flex", flexDirection: "column"} :
                {display: "flex", flexDirection: "row"}
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
                            <Image
                                key={index}
                                className={"image"}
                                src={ele.img}
                                alt={ele.name}
                                style={{height: leftIconsSize}}
                                pose={(animationState > 0 && animationState < 2) ? "visibleTop" : "hiddenTop"}
                            />
                        ))}
                    </PoseGroup>
                </div>
                <div id="down">
                    <Image
                        src={teamsLogo}
                        alt={"teams"}
                        pose={(animationState > 1 ? "visibleBottom" : "hiddenBottom")}
                        style={{height: rightIconSize}}
                    />
                </div>
            </div>
        </div>
    )
}