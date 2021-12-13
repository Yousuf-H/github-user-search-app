import { publicRequest } from './requestMethod'

// Get User data from git hub endpoint
export const getUserData = async (username) => {
  const res = await publicRequest.get(username)
  return res.data
}