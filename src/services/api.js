import axios from 'axios'
import Vue from 'vue'
export default() => {
  return axios.create({
    baseURL: 'https://damp-cove-14583.herokuapp.com/'
  })
}
Vue.prototype.$ajax = axios
