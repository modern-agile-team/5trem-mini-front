import axios from 'axios';

const signUpApi = async (userInfo) => {
    const SERVER_URL = "http://13.125.126.246:3000/register";

    const response = await axios.post(SERVER_URL, { userInfo });
    return response.data;
}

export default signUpApi;