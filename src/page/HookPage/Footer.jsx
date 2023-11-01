import React from 'react'
//rfc
export default function Footer(props) {
    console.log("🚀 ~ file: Footer.jsx:4 ~ Footer ~ props:", props)
    return (
        <div>
            <h1>{props.number * 2}</h1>
            <button onClick={props.handelRe} className='btn btn-danger'>Reset</button>
        </div>
    )
}
