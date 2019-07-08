import React from 'react';

export default ({title, onClick}) => (
    <button onClick={onClick}>
        {title}
    </button>
)