import React, { Component } from 'react'
import '../styles/planets.scss'

export default ({id, style, image}) => {
    return (
      <div style={style} className={"planets"}>
        <img src={image} alt={"red planet"} style={{width: '100%'}}/>
      </div>
    )
};