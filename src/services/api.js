import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://damp-cove-14583.herokuapp.com/'
  })
}
