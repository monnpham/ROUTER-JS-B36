import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUserAction } from '../redux/action/user'
import axios from 'axios'
import { message } from 'antd'

class List extends Component {
    //  getall , delete get detail
    /**
     * renderUserlist
     * 1. tạo 1 state chứa user 
     * 2. call api get all ,  and then setState when call success
     * 3. write f() render table user
     */

    componentDidMount() {
        this.props.handleSetUser()
    }
    handleDelete = (id) => {
        axios
            .delete(`https://64e6731c09e64530d18000da.mockapi.io/users/${id}`)
            .then((res) => {
                console.log(res);
                message.success("xoá thành công");
                this.props.handleSetUser();
            })
            .catch((err) => {
                console.log(err);
            });
    }
    handleRenderTable = () => {
        return this.props.users.map((user, index) => {
            return <tr key={index}>
                <td>{user.id}</td>
                <td>{user.account}</td>
                <td>{user.password}</td>
                <td>{user.name}</td>
                <td>
                    <button onClick={() => this.handleDelete(user.id)} className="btn btn-danger">Delete</button>
                    <button className="btn btn-info ">Edit</button>
                </td>
            </tr>
        })
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Account</td>
                            <td>Password</td>
                            <td>Name</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>{this.handleRenderTable()}</tbody>
                </table>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.userReducer.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        handleSetUser: () => {
            dispatch(setUserAction())
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)
