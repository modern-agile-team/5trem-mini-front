import axios from "axios";

const toDoListApi = {
  async checkToDoList(year, month) {
    const SERVER_URL =
      "http://13.125.126.246:3000/diaries/" +
      localStorage.getItem("userID") +
      "/months/" +
      year +
      "-" +
      month;

    const response = await axios.get(SERVER_URL);
    console.log(response);
    // return response.data;
  },
};

export default toDoListApi;
