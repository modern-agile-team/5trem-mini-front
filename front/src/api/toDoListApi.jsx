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
      day;

    const response = await axios.get(SERVER_URL);
    return response.data;
  },

  async updateToDoList(data) {
    const SERVER_URL = "http://13.125.126.246:3000/todo";

    await axios.patch(SERVER_URL, data);
  },

  async addToDoList(data) {
    const SERVER_URL = "http://13.125.126.246:3000/todo";

    const response = await axios.post(SERVER_URL, data);
    return response.data;
  },

  async delToDoList(data) {
    const SERVER_URL = "http://13.125.126.246:3000/todo";

    const response = await axios.delete(SERVER_URL, { data });
    return response.data.success;
  },
};

export default toDoListApi;
