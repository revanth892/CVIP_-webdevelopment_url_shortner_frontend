import axios from 'axios';

const instance =axios.create({
        baseURL:"https://url-shortner-pliz.onrender.com",
});

export default instance;