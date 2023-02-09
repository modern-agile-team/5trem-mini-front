import axios from "axios";

const friendApi = {
  async getFriendList() {
    const SERVER_URL =
      "http://13.125.126.246:3000/friends/" +
      localStorage.getItem("userID") +
      "/getlist";

    const response = await axios.get(SERVER_URL);
    return response.data;
  },

  async getFriendWaiting() {
    const SERVER_URL =
      "http://13.125.126.246:3000/friends/" +
      localStorage.getItem("userID") +
      "/" +
      "waiting";

    const response = await axios.get(SERVER_URL);
    return response.data;
  },

  async getFriendSearch(nickName) {
    const SERVER_URL =
      "http://13.125.126.246:3000/friends/" +
      localStorage.getItem("userID") +
      "/search/" +
      nickName;

    const response = await axios.get(SERVER_URL);
    console.log(response.data);
    return response.data;
  },

  async acceptfriend(connectionNum) {
    const SERVER_URL = "http://13.125.126.246:3000/friends/request";

    const response = await axios.patch(SERVER_URL, connectionNum);
    return response.data;
  },

  async refusefriend(data) {
    const SERVER_URL = "http://13.125.126.246:3000/friends/request";

    const response = await axios.delete(SERVER_URL, { data });
    return response.data;
  },

  async requestfriend(data) {
    const SERVER_URL = "http://13.125.126.246:3000/friends/request";

    const response = await axios.post(SERVER_URL, data);
    return response.data;
  },
};

export default friendApi;
