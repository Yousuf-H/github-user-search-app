import { publicRequest } from './requestMethod'

// Get User data from git hub endpoint
export const getUserData = async (username) => {
  const res = await publicRequest.get(username)
  console.log(res.data)
  return res.data
}