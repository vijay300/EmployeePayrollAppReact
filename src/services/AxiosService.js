import axios from 'axios';
import { baseUrl } from '../config/config';

export default class AxiosService {
    
    api = axios.create({ url: baseUrl });

    Post(url, data) {
        return axios.post(baseUrl+url, data, {
            headers: {
                contentType: 'application/json'
            }
        })
    }

    Get() {
        return axios.get(baseUrl, {
            headers: {
                contentType: 'application/json'
            }
        })
    }

    Delete(url) {
        return axios.delete(baseUrl+url, {
            headers: {
                contentType: 'application/json'
            }
        })
    }

    Put(url, data) {
        return axios.put(baseUrl+url, data, {
            headers: {
                contentType: 'application/json'
            }
        })
    }
}