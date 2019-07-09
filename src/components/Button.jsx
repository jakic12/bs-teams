import React from 'react';
import "../styles/button.scss";

export default ({title, onClick}) => (
    <button style={{
    width: 180,
        height: 55
}} onClick={onClick}>
    {title}
</button>
)