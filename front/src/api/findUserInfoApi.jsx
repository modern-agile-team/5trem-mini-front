import axios from "axios";

const findUserInfoApi = {
  async getMyId(data) {
    const SERVER_URL = "http://13.125.126.246:3000/find/id";
    console.log(data);
    const response = await axios.post(SERVER_URL, data);
    console.log(response);
    return response.data;
  },

  async updateMyInfo(fromData) {
    const SERVER_URL =
      "http://13.125.126.246:3000/profiles/" +
      localStorage.getItem("myID") +
      "?directory=user";

    const response = await axios.put(SERVER_URL, fromData);
    return response.data;
  },
};

export default findUserInfoApi;
