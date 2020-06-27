import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-project-react-98888.firebaseio.com/'
});

export default instance;