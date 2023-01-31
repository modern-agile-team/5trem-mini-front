import axios from "axios";

const importDiary = async (year, month) => {
  console.log(year);
  console.log(month);
  const SERVER_URL =
    "http://localhost:3000/diaries/wns/months/" + year + "-" + month;

  const response = await axios.get(SERVER_URL);
  return response.data.success;
};

export default importDiary;
