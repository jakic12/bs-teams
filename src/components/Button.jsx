import React from 'react';
import "../styles/button.scss";

export default ({title, onClick}) => (
    <button style={{
    width: 150,
        height: 40
}} onClick={onClick}>
    {title}
</button>
)