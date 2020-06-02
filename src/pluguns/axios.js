import axios from 'axios'

export default axios.defaults.baseURL = process.env.VUE_APP_URL || 'https://api.grtsk-cmp.studio-luck.ru'

