import React, { Component } from 'react'
import '../styles/leftright-component.scss'
import posed, {PoseGroup} from 'react-pose';
import "../styles/feature-view.scss";

const List = posed.ul({
    closed: {
        x: -100,
        opacity: 0,
        transition: { duration: 1000 }
    },
    open: {
        x: 0,
        opacity: 1,
        transition: { duration: 1000 }
    }
});

const Item = posed.li({
    open: { y: 0, opacity: 1 },
    closed: { y: 20, opacity: 0 }
});


export default ({isMobile, flip, textItems, image, title, animationState, id, icon, style}) => {
    if (flip && !isMobile) {
        return (
            <div style={style} id={id} className="leftRightContainer">
                <div className="containerWrapper">
                    <div className="half">
                        <img className="TeamsImg" src={image} alt="TeamsImg" />
                    </div>
                    <div className="half">
                        <h1 className="title">{title}</h1>
                        <List pose={animationState > -1 ? "open" : "closed"}>
                            <PoseGroup>
                                {textItems.map((text, index) => (
                                    <Item
                                        key={index}
                                        className={"listItem"}
                                        style={{listStyleType: "none"}}
                                        pose={animationState > 0 ? "open" : "closed"}>
                                        <img style={{width: 25}} src={icon} alt={"checkbox"}/>
                                        <p style={{display: "inline", paddingLeft: 10}}>{text}</p>
                                    </Item>
                                ))}
                            </PoseGroup>
                        </List>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div style={style} id={id} className="leftRightContainer">
                <div className="containerWrapper">
                    <div className="half">
                        <h1 className="title">{title}</h1>
                        <List pose={animationState > -1 ? "open" : "closed"}>
                            <PoseGroup>
                                {textItems.map((text, index) => (
                                    <Item
                                        key={index}
                                        className={"listItem"}
                                        style={{listStyleType: "none"}}
                                        pose={animationState > 0 ? "open" : "closed"}>
                                        <img style={{width: 25}} src={icon} alt={"checkbox"}/>
                                        <p style={{display: "inline", paddingLeft: 10}}>{text}</p>
                                    </Item>
                                ))}
                            </PoseGroup>
                        </List>
                    </div>
                    <div className="half">
                        <img className="TeamsImg" src={image} alt="TeamsImg" />
                    </div>
                </div>
            </div>
        )
    }
}