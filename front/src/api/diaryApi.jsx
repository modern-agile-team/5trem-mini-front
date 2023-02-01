import axios from "axios";

const diaryApi = {
  async checkDiary(year, month) {
    const SERVER_URL =
      "http://13.125.126.246:3000/diaries/" +
      localStorage.getItem("userID") +
      "/months/" +
      year +
      "-" +
      month;

    const response = await axios.get(SERVER_URL);
    return response.data;
  },

  async importDiary(day) {
    day[1] = day[1] >= 10 ? day[1] + 1 : "0" + (day[1] + 1);
    const SERVER_URL =
      "http://13.125.126.246:3000/diaries/" +
      localStorage.getItem("userID") +
      "/" +
      day[0] +
      "-" +
      day[1] +
      "-" +
      day[2];

    const response = await axios.get(SERVER_URL);
    return response;
    // { content: response.data.content, title: response.data.title };
  },
};

export default diaryApi;
