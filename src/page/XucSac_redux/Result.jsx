import React from 'react'

export default function Result({
    handleGamePlay,
    luaChon,
    soLanThang,
    soLuotChoi,
    thongBao,
}) {
    return (
        <div className='pt-5'>
            <h2>{thongBao}</h2>
            <button onClick={handleGamePlay} className='btn btn-warning px-5 py-2'>Play Game</button>
            <h2>Lựa Chọn : {luaChon}</h2>
            <h2>Số Lượt Chơi : {soLuotChoi}</h2>
            <h2>Số Lần Thắng : {soLanThang}</h2>
        </div>
    )
}
