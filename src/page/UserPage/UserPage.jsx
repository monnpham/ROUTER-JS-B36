import React, { Component } from 'react'
import Form from './Form'
import List from './List'

export default class UserPage extends Component {
    /*
    * xử lí 5 api: getlist , add , remove , update , getdetail id
    */
    render() {
        return (
            <div className='container'>
                <Form></Form>
                <List></List>
            </div>
        )
    }
}
