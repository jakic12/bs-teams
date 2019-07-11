import React from 'react';
import "../styles/button.scss";

export default ({title, onClick, margin, style}) => (
    <button className="roundButton" style={{
        margin: margin,
        width: 150,
        height: 40,
        ...style
}} onClick={onClick}>
    {title}
</button>
)