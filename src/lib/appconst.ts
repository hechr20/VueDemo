import url from './url'
const AppConsts = {
    appBaseUrl: "http://localhost:8080",
    remoteServiceBaseUrl: url.endsWith('/') ? url.slice(0, -1) : url
}
export default AppConsts