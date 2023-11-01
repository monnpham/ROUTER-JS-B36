import { SET_USER } from "../constant/constant"

const initialState = {
    users: [],
}

export let userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER: {
            state.users = payload
            return { ...state }
        }
        default:
            return state
    }
}
