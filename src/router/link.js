import store from '../stores/index.js'
import axios from 'axios'
if (store.state.authentication) {
  axios.defaults.headers.common['Authorization'] =
    'Bearer ' + store.state.authentication
}
axios.defaults.baseURL = "https://api.big-solution.net/api/";

export default {
  // url: 'http://localhost/Ekoko/api/',
  // admin: 'http://localhost/Ekoko/api/admin/',
  // public: 'http://localhost/Ekoko/public/',
  url: 'https://api.big-solution.net/api/',
  admin: 'https://api.big-solution.net/api/admin/warehouses/',

  
}
