import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <NavLink className="mx-3 btn btn-danger " to="/">Home</NavLink>
                <NavLink className="mx-3 btn btn-warning " to="/Login">Login</NavLink>
                <NavLink className="mx-3 btn btn-success " to="/life-cycle">life-cycle</NavLink>
                <NavLink className="mx-3 btn btn-success " to="/UserPage">Users</NavLink>
                <NavLink className="mx-3 btn btn-success " to="/HookPage">HookPage</NavLink>
                <NavLink className="mx-3 btn btn-success " to="/XucSac">Xuc Sac</NavLink>
                <NavLink className="mx-3 btn btn-success " to="/XucSac_Redux">Xuc Sac-Redux</NavLink>
            </div>
        )
    }
}
