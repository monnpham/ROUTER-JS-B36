import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <NavLink className="mx3 btn btn-warning " to="/">Home</NavLink>
                <NavLink className="mx3 btn btn-warning " to="/Login">Login</NavLink>
            </div>
        )
    }
}
