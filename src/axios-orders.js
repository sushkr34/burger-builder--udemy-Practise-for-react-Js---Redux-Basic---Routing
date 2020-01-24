import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-dd942.firebaseio.com/'
});

export default instance;