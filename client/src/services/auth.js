import axios from 'axios'

const logout = () => {
  const promise = axios.get('/auth/logout')
  return promise.then(response => response)
}

const getUser = () => {
  const promise = axios.get('/auth/user')
  return promise.then(response => response.data)
}

export default { logout, getUser }