import React, { Component } from 'react'
import '../styles/firstRow.scss'
import '../styles/shared.scss'


export default ({title, style}) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
            <div className="left" style={{textAlign: 'center', margin: 30}}>
                <h1 className={'bigLightTitle'}>{title}</h1>
            </div>
        </div>
    )
}