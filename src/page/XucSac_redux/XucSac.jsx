import React from 'react'
import { TAI, XIU } from './Utils'

export default function XucSac({
    arrXS,
    setLuaChon,

}) {
    return (
        <div className='d-flex alin-item-center justify-content-center'>
            <button onClick={() => {
                setLuaChon(XIU)
            }} className="p-5 btn btn-dark">Xỉu</button>
            <div className='mx-5'>

                {arrXS.map((item) => {
                    return <img width={60} src={item.img} alt="a" />
                })}
            </div>
            <button onClick={() => {
                setLuaChon(TAI)
            }} className="p-5 btn btn-danger">Tài</button>

        </div>
    )
}
