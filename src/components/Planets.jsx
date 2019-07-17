import React, { Component } from 'react'
import '../styles/planets.scss'

export default ({id, style, firstImage, secondImage}) => {
    return (
        <div id={id} className="planets"  style={style}>
            {firstImage && <div className={"redPlanet"}>
                <img src={firstImage} alt={"red planet"} />
            </div>}
            {secondImage && <div className={"moon"}>
                <img src={secondImage} alt={"red planet"} />
            </div>}
        </div>
    )
};