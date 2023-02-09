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
    console.log(response);
    return response.data;
  },

  async getFriendSearch(nickName) {
    const SERVER_URL =
      "http://13.125.126.246:3000/friends/" + nickName + "/search";

    const response = await axios.get(SERVER_URL);
    return response.data;
  },

  async acceptfriend(connectionNum) {
    const SERVER_URL = "http://13.125.126.246:3000/friends/request";

    const response = await axios.patch(SERVER_URL, connectionNum);
    console.log(response);
  },

  async refusefriend(connectionNum) {
    const SERVER_URL = "http://13.125.126.246:3000/friends/request";

    const response = await axios.delete(SERVER_URL, connectionNum);
    console.log(response);
  },
};

export default friendApi;
