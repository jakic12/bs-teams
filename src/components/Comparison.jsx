import React, {useState} from "react";
import "../styles/comparison.scss"
import posed, {PoseGroup} from 'react-pose';

const Image = posed.img({
    hoverable: true,
    pressable: true,
    hidden: {
        opacity: 0,
        transition: { duration: 800 }
        },
    visible: {
        opacity: 1,
        transition: { duration: 1000 }
        },
});

export default ({config, teamsLogo, leftIconsSize, rightIconSize, showFirst, showSecond, move }) => {
    return (
        <div id="comparison">
            <div id="top">
                <PoseGroup>
                    {config.map((ele, index) => (
                        <Image
                            key={index}
                            src={ele.img}
                            alt={ele.name}
                            style={{height: leftIconsSize}}
                            pose={showFirst ? "visible" : "hidden"}
                        />
                    ))}
                </PoseGroup>
            </div>
            <div id="down">
                <Image
                    src={teamsLogo}
                    alt={"teams"}
                    pose={showSecond ? "visible" : "hidden"}
                    style={{height: rightIconSize}}
                />
            </div>
        </div>
    )
}