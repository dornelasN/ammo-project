import axios from 'axios'

import configVars from '../vars'
import handleErrors from './handleErrors'

axios.defaults.baseURL = configVars.host[configVars.env] + configVars.host.api

axios.interceptors.response.use(
  response => {
    return response.data
  },
  async error => {
    handleErrors(error)
    throw error
  }
)
