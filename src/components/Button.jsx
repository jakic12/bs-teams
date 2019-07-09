import React from 'react';
import "../styles/button.scss";

export default ({title, onClick, margin}) => (
    <button style={{
        margin: margin,
        width: 150,
        height: 40
}} onClick={onClick}>
    {title}
</button>
)