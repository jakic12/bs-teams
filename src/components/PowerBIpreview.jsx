import React, { Component } from 'react'



export default ({title, description, btnTitle, onClick, bigLogo, smallLogo, style, display}) => {
    const paddingX = 300;
    const paddingY = 200;
    const sizeX = window.innerWidth-paddingX;
    const sizeY = window.innerHeight-paddingY;
    return (
        <div id="powerBIpreview" className="PowerBIpreview" style={{...style, width:`100vw`, height: sizeY + paddingY/2, padding:`${paddingY/2}px ${paddingX/2}px`}}>
            {(display) && <iframe width={sizeX} height={sizeY} src="https://app.powerbi.com/view?r=eyJrIjoiMWQzYWVmOWEtMGY3Ni00MDIwLTk3M2ItMGRjOGJjNWQyNGM5IiwidCI6IjEyNGQyYzU3LTQ1N2EtNDNhNy1iNjJiLTgzODA5ODUzZjdjOSIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>}
        </div>
    )
}