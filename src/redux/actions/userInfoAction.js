
import { getUserData } from '../../API/githubAPI'
import { USER_LOADING, GET_USER_SUCCESS, GET_USER_FAIL } from '../types'

// Get User ACTIOn
export const getUserAction = (username) => {
  return async (dispatch) => {
    dispatch({ type: USER_LOADING })
    try {
      const res = await getUserData(username)
      console.log(res)
      dispatch({ type: GET_USER_SUCCESS, Payload: res })
    } catch (err) {
      console.log(err.message)
      dispatch({ type: GET_USER_FAIL, errMsg: err.message })
    }
  }
}