import axios from "axios";
export const getData = async (url, setFunc, setErrMsg, setIsLoading, id) => {
  try {
    const { data } = await axios.get(url);
    setFunc(data);
  } catch (error) {
    setErrMsg(error);
  }
  setIsLoading(false);
};
