import axios from "axios";

const toDoListApi = {
  async getToDoListCount(year, month) {
    const SERVER_URL =
      "http://13.125.126.246:3000/todo/cnt/" +
      localStorage.getItem("userID") +
      "/" +
      year +
      "-" +
      month;

    const response = await axios.get(SERVER_URL);
    return response.data;
  },

  async getToDoList(day) {
    const SERVER_URL =
      "http://13.125.126.246:3000/todo/list/" +
      localStorage.getItem("userID") +
      "/" +
      day[0] +
      "-" +
      (day[1] + 1) +
      "-" +
      day[2];

    const response = await axios.get(SERVER_URL);
    return response.data;
  },

  async getToDoList(day) {
    const SERVER_URL =
      "http://13.125.126.246:3000/todo/list/" +
      localStorage.getItem("userID") +
      "/" +
      day[0] +
      "-" +
      (day[1] + 1) +
      "-" +
      day[2];

    const response = await axios.get(SERVER_URL);
    return response.data;
  },

  async updateToDoList(data) {
    const SERVER_URL = "http://13.125.126.246:3000/todo";

    await axios.patch(SERVER_URL, data);
  },
};

export default toDoListApi;
