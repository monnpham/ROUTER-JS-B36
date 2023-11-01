import React, { useState } from 'react'
import './style.css'
// hình để trong src => import
import bgGame from './bgGame.png'
import XucSac from './XucSac'
import Result from './Result'
import { TAI, XIU, defaultSX } from './Utils'


export default function Ex_XucSac_Redux() {
    const [arrXS, SetArrXS] = useState(defaultSX)
    const [luaChon, setLuaChon] = useState()
    const [thongBao, sethongBao] = useState("-")
    const [soLuotChoi, setSoLuotChoi] = useState(0)
    const [soLanThang, setSoLanThang] = useState(0)

    let handleGamePlay = () => {
        let min = 1
        let max = 6
        let sum = 0
        let newXS = arrXS.map((item) => {
            let number = Math.floor(Math.random() * (max - min + 1) + min)
            sum += number
            return {
                img: `https://baitap-react-redux-gamexucxac.vercel.app/image_Game_XucXac/${number}.png`,
                value: number
            }
        })
        if ((luaChon === XIU && sum < 11) || (luaChon === TAI && sum > 11)) {
            setSoLanThang(soLanThang + 1)
            sethongBao("You Win")
        } else sethongBao("You Lose")
        SetArrXS(newXS)
        setSoLuotChoi(soLuotChoi + 1)
    }
    return (
        <div
            style={{
                backgroundImage: `url(${bgGame})`
            }}
            className='game-container mx-5'>
            <XucSac arrXS={arrXS} setLuaChon={setLuaChon} />
            <Result
                luaChon={luaChon}
                soLanThang={soLanThang}
                soLuotChoi={soLuotChoi}
                thongBao={thongBao}
                handleGamePlay={handleGamePlay}
            />
        </div>
    )
}
