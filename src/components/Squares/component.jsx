import React from "react";

const SquareComponent = ({totalCount, increment, decrement}) => (
    <div className='square__container'>
        <div className="square">
            <div className="increment__count">
                <button type="button" className="up" onClick={increment}>+</button>
            </div>
            <div className="total__count">{totalCount}</div>
            <div className="decrement__count">
                <button type="button" className="down" onClick={decrement}>-</button>
            </div>
        </div>
    </div>
)

export default SquareComponent;