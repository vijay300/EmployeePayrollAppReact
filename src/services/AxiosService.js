import axios from 'axios';
import { baseUrl } from '../config/config';

export default class AxiosService {
    
    Post(url, data) {
        return axios.post(baseUrl+url, data, {
            headers: {
                contentType: 'application/json'
            }
        })
    }

    get(data) {
        axios.get('url', data)
    }
}