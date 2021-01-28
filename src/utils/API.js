import axios from 'axios';
const queryURL = 'https://randomuser.me/api/?results=25&nat=us';

export default {
    getRandomUsers: () => {
        return axios.get(queryURL);
    }
}