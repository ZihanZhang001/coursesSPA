import axios from 'axios'
import Vue from 'vue'
export default() => {
  return axios.create({
    baseURL: 'http://localhost:3000/'
  })
}
Vue.prototype.$ajax = axios
