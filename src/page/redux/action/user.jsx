import axios from "axios"
import { SET_USER } from "../constant/constant"

export let setUserAction = () => {
    return (dispatch) => {
        axios({
            url: "https://64e6731c09e64530d18000da.mockapi.io/users",
            method: "GET",
        })
            .then((res) => {
                let action = {
                    type: SET_USER,
                    payload: res.data
                }
                dispatch(action)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}