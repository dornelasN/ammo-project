/**
 * Project Variables
 */

export default {
  env: (() => {
    if (
      location.host.indexOf('localhost') >= 0 ||
      location.host.indexOf('127.0.0.1') >= 0 ||
      location.host.indexOf('192.168.0.117') >= 0
    ) {
      return 'dev'
    } else {
      return 'prod'
    }
  })(),
  host: {
    dev: 'http://localhost:8888', // development host server
    prod: '', // production host server
    api: '/'
  }
}
