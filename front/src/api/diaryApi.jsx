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
    const SERVER_URL =
      "http://13.125.126.246:3000/diaries/" +
      localStorage.getItem("userID") +
      "/" +
      day[0] +
      "-" +
      (day[1] + 1) +
      "-" +
      day[2];

    const response = await axios.get(SERVER_URL);
    return response;
  },

  async enrollmentDiary(data) {
    const SERVER_URL =
      "http://13.125.126.246:3000/diaries/" +
      localStorage.getItem("userID") +
      "?directory=diary";

    const response = await axios.post(SERVER_URL, data);
  },

  async updateDiary(data) {
    const SERVER_URL =
      "http://13.125.126.246:3000/diaries/" +
      localStorage.getItem("userID") +
      "/" +
      localStorage.getItem("diaryNum");

    const response = await axios.patch(SERVER_URL, data);
    console.log(":::update:::", response);
  },
};

export default diaryApi;
