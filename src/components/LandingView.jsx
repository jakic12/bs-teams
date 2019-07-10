import Button from "./Button";
import React from "react";
import "../styles/landing-view.scss";

export default ({img, btnTitle, onClick, title, description}) => {
    return (
        <div id="landing" style={this.props.style}>
            <div id="left">
                <h1>{title}</h1>
                <p>{description}</p>
                <Button
                    margin={20}
                    title={btnTitle}
                    onClick={onClick}/>
            </div>
            <div id="right">
                <img src={img} alt={"screen"}/>
            </div>
        </div>
    )
}