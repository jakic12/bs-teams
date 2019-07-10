import React, { Component } from 'react'
import '../styles/firstRow.scss'
import Button from '../components/Button'


export default ({title, description, btnTitle, onClick, bigLogo, smallLogo, style}) => {
    return (
        <div className="firstRow" style={style}>
            <div className="left">
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="btnWraper">
                    <Button
                        title={btnTitle}
                        onClick={onClick}/>
                </div>
            </div>
            <div className="right">
                <img src={bigLogo} className="telefonLaptop"></img>
                <img src={smallLogo} className="telefon"></img>
            </div>
        </div>
    )
}

/*
<FirstRow
title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
description={"Nunc ac sapien vulputate odio convallis posuere nec vitae magna." +
"In a efficitur ex, eget dictum elit. Nullam ac elit blandit, pharetra augue id, pulvinar ipsum." +
"Maecenas vel libero odio. Mauris vehicula neque ex, in malesuada purus luctus sit amet."}
btnTitle="Klikni vec"
onClick="nekej"
bigLogo={TelefonLaptop}
smallLogo={Telefon}/>
*/