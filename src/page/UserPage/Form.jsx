import axios from 'axios'
import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { setUserAction } from '../redux/action/user'

class Form extends Component {
    /**
     * 
     * f(add)
     * 1. create state {input} from user
     * 2. call api with method "POST", push data from state to sv
     */
    state = {
        users: {
            name: "",
            password: "",
            account: "",
        }
    }
    componentDidMount() {
        this.inputRef.current.focus()  // kich hoat inputRef , inputRef dung de khi load trang se vao nhap lien
    }
    handleChangeForm = (event) => {
        let { value, name } = event.target
        let users = { ...this.state.users, [name]: value }
        this.setState({
            users: users
        })
    }
    handleAdd = () => {
        axios({
            url: "https://64e6731c09e64530d18000da.mockapi.io/users",
            method: "POST",
            data: this.state.users
        })
            .then((res) => {
                this.props.handleSetUser()
                this.fromRef.current.reset()
            })
            .catch((err) => {
                console.log(err)
            })
    }
    inputRef = createRef() // tao bien 
    fromRef = createRef() // tao bien 

    render() {
        return (
            <div>
                <form className="form-inline" ref={this.fromRef}>
                    <input ref={this.inputRef} // su dung
                        onChange={this.handleChangeForm} value={this.state.name} type="text" className='form-control' name="name" placeholder='Name' />
                    <input onChange={this.handleChangeForm} value={this.state.account} type="text" className='form-control' name="account" placeholder='Account' />
                    <input onChange={this.handleChangeForm} type="text" className='form-control' name="password" placeholder='Password' />
                    <button onClick={this.handleAdd} type='button' className="btn btn-dark">Add</button>
                </form>
            </div>
        )
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        handleSetUser: () => {
            dispatch(setUserAction())
        }
    }
}
export default connect(null, mapDispatchToProps)(Form)