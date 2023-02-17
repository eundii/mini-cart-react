import React from 'react';

function Backdrop({ onClickHandler }) {
    return (
        <div
            id="backdrop"
            className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            onClick={onClickHandler}
        ></div>
    );
}

export default Backdrop;
