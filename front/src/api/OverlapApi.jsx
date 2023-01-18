import axios from 'axios';

//http://13.125.126.246:3000/check/id
//http://localhost:3000/check/nickname
const OverlapApi = async (text, type) => {
    const SERVER_URL = "http://13.125.126.246:3000/check";

    const response = await axios.post(SERVER_URL, { [type]: text })
    return response.data;
}

export default OverlapApi;


