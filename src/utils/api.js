import axios from "axios";
export const getData = async (url, setErrMsg, id) => {
  try {
    await axios.get(url);
  } catch (error) {
    setErrMsg(error);
  }
};
