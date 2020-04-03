import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v2/9973533'
});

export default instance;