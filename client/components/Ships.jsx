import React, { useState } from 'react';

export function ShipOne() {
    const [orientation, setOrientation] = useState(0);
    const [length, setLength] = useState(1);
    const [destroyed, setDestroyed] = useState(false);


    return (
        <div className="shipone"></div>
    )
}