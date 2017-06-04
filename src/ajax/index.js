import axios from 'axios'

const requestTimeout = 60000 // one minute
let environment = process.env.NODE_ENV

// Comment for tests
environment = 'production'

// @see create-react-app/README.md#adding-custom-environment-variables
// run npm start => 'development',
// run npm test => 'test',
// npm run build => 'production'.
const BaseURL = {
  production: 'https://chvsk.dev.ikitlab.co/api/v1',
  development: '//localhost:5000/api'
}

/**
 *
 * @type {AxiosInstance}
 */
const ajax = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: requestTimeout,

  // @returns {String}
  transformRequest: [
    (data) => {
      // console.log('ajax request data', data);
      return JSON.stringify(data)
    }
  ],

  validateStatus: function (status) {
    return status >= 200 && status < 300 // default
  }
})

// Конфигурация запроса
ajax.interceptors.request.use(
  (config) => {
    // Запросы к реальному бекенду
    let url = config.url

    // TODO: add auth token
    if (false) {
      config.headers.Authorization = `Bearer ${auth.getToken()}`
    }

    url = `${BaseURL[environment]}${url}`

    config.url = url

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default ajax
