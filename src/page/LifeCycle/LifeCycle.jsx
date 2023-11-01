import React, { Component } from 'react'
import Footer from './Footer'

export default class LifeCycle extends Component {
    state = {
        number: 10,
    }
    handleIncrease = () => this.setState({ number: this.state.number + 1 })
    handleDecrease = () => this.setState({ number: this.state.number - 1 })
    componentDidMount() {
        var timmer = 600
        this.myCountDown = setInterval(() => {
            console.log("CD", timmer--)
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.myCountDown)

    }
    shouldComponentUpdate(nextprops, nextState) {
        console.log(" nextprops, nextState:", nextprops, nextState)
        if (nextState.number === 5) {
            return false
        }
        return true
    }
    componentDidUpdate(prevProps) {
        console.log("nextprops:", prevProps)
        console.log("update")
    }
    render() {
        return (
            <div>
                <button onClick={this.handleDecrease} className="btn btn-warning">-</button>
                <strong className="mx-5">{this.state.number}</strong>
                <button onClick={this.handleIncrease} className="btn btn-success">+</button>
                <Footer></Footer>
            </div>
        )
    }
}
