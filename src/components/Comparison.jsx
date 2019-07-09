import React from "react";
import "../styles/comparison.scss"
import { Stage, Layer, Rect, Text, Arrow } from 'react-konva';

export default ({config, teamsLogo, height, leftIconsSize, rightIconsSize}) => {
    const middleX = (leftIconsSize/2 + (config.length*(leftIconsSize+20)))/2;
    return (
        <div id="main" style={{
            height: height
        }}>
            <div id="left">
                {config.map(ele => (
                    <img
                        src={ele.img}
                        alt={ele.name}
                        style={{width: leftIconsSize}}
                    />
                ))}
            </div>
            <div id="middle">
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        {config.map((ele, i) => (
                            <Arrow
                                points={[0, leftIconsSize/2 + (i*(leftIconsSize+20)), 800, middleX]}
                                fill="black"
                                stroke="black"
                            />
                        ))}
                        </Layer>
                </Stage>
                ))}
            </div>
            <div id="right">
                <img
                    src={teamsLogo}
                    alt={"teams"}
                    style={{height: rightIconsSize}}
                />
            </div>
        </div>
    )
}