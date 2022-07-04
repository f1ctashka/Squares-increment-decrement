import React, { useState } from "react";

import SquareComponent from "./component";

import './styles.css';

const Square = () => {
    const [Count, setCount] = useState(0);

    return (
        <SquareComponent
            totalCount={Count}
            increment={() => setCount(Count + 1)}
            decrement={() => setCount(Count - 1)}
        />
    )
}

export default Square;
