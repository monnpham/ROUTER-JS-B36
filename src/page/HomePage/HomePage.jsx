import axios from 'axios'
import React, { Component } from 'react'

export default class HomePage extends Component {
    state = {
        userList: []
    }
    componentDidMount() {
        axios({
            url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
            method: "GET",
            headers: {
                TokenCybersoft:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NiIsIkhldEhhblN0cmluZyI6IjAzLzA0LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMjEwMjQwMDAwMCIsIm5iZiI6MTY4MzMwNjAwMCwiZXhwIjoxNzEyMjUwMDAwfQ.YeDhc_oSixV2XtFPDzcpxFhBos5832JpQpndHNoqZLk",
            },
        })
            .then((res) => {
                console.log(res)
                this.setState({
                    userList: res.data.content,
                })

            })
            .catch((err) => {
                console.log(err)
            })
    }
    renderUserList = () => {
        let list = this.state.userList
        return list.map(({ hoTen, maLoaiNguoiDung }, key) => {
            return (
                <strong
                    className={`col-2  ${maLoaiNguoiDung === "KhachHang" ? "text-success" : "text-danger"
                        }`}
                    key={key}
                >
                    {hoTen.length > 20 ? hoTen.slice(0, 20) + "..." : hoTen}
                </strong>
            )
        })
    }
    render() {
        return (
            <div className='row'>
                {this.renderUserList()}
            </div>
        )
    }
}
