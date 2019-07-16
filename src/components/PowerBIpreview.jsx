import React, { Component } from 'react'


export default ({title, description, btnTitle, onClick, bigLogo, smallLogo, style, display}) => {
    return (
        <div className="PowerBIpreview" style={{...style, width:`100vw`, height:`640px`, padding:`20px calc((100vw - 800px)/2`}}>
            {(display) && <iframe width="800" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiYzc4NmVmNzktY2M5MS00ZTU5LThmYjYtY2U2NjNlNDcxZjM4IiwidCI6IjgyMTQ2ZDY2LWYyZWEtNGZhYy1iZWI4LWU4ZWQxOTExNDZiOSIsImMiOjl9" frameborder="0" allowFullScreen="true"></iframe>}
        </div>
    )
}