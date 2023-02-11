import axios from "axios";

const commentApi = {
  async getToDoListComment(day) {
    const SERVER_URL =
      "http://13.125.126.246:3000/todoComment/" +
      localStorage.getItem("userID") +
      "/" +
      day;

    const response = await axios.get(SERVER_URL);
    console.log(response.data);
    return response.data;
  },
};

export default commentApi;
