import React, { Component } from 'react'
import ReactSvg from 'react-svg'

import '../styles/planets.scss'

import redPlanet from '../res/img/planets/planet_big_red.svg'
import moon from '../res/img/planets/planet_small_gray.svg'

export default ({style}) => {
    return (
        <div className="planets"  style={style}>
            <div className={"redPlanet"}>
                <img src={redPlanet} alt={"red planet"} />
            </div>
            <div className={"moon"}>
            <img src={moon} alt={"red planet"} />
            </div>
        </div>
    )
};