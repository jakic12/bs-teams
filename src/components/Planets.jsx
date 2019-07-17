import React, { Component } from 'react'
import '../styles/planets.scss'

export default ({id, style, image, width}) => {
    return (
      <div id={id} style={style} className={"planets"}>
        <img src={image} alt={"red planet"} style={{width}}/>
      </div>
    )
};