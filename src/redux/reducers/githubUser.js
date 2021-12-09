import { USER_LOADING, GET_USER_SUCCESS, GET_USER_FAIL } from '../types'

const initalState = {
  isLoading: false,
  payload: [],
  errMessage: null
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case GET_USER_SUCCESS:
      return {
        isLoading: false,
        payload: action.Payload,
        errMessage: null
      }
    case GET_USER_FAIL:
      return {
        isLoading: false,
        payload: [],
        errMessage: action.errMsg
      }
    default:
      return state
  }
}

export default reducer