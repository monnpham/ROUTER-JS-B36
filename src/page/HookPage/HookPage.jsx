import React, { useState } from 'react'
import Footer from './Footer';
// rfc
export default function HookPage() {
    let [number, setNumber] = useState(1);
    // [state, setNumber] = useState(defaultValue)

    let handelIn = () => { setNumber(number + 1) }
    let handelDe = () => { setNumber(number - 1) }
    let handelRe = () => { setNumber(0) }

    return (
        <div className='text-center bg-dark text-white'>
            <button onClick={handelDe} className="btn btn-danger">-</button>
            <strong>{number}</strong>
            <button onClick={handelIn} className="btn btn-info">+</button>
            <Footer number={number} handelRe={handelRe} />
        </div>
    )
}

// trong class có gì thì trong function có cái đó 
