import axios from 'axios'

const success = res => res
const error = err => {
    if (401 === err.response.status) {
        window.location = '/' // ou entrara na pagina home ou ira pro login, se o token nao estiver expirado
    } else {
        return Promise.reject(err)
    }
}

axios.interceptors.response.use(success, error)