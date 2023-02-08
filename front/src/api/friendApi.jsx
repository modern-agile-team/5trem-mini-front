import axios from "axios";

const friendApi = {
  async getFriendList() {
    const SERVER_URL =
      "http://13.125.126.246:3000/friends/" + localStorage.getItem("userID");

    const response = await axios.get(SERVER_URL);
    console.log(response.data);
    return response.data;
  },
};

export default friendApi;
