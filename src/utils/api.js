import axios from "axios";
export const getData = async (url, setIsLoading, setErrMsg, setFunc) => {
  try {
    const { data } = await axios.get(url);
    setFunc !== undefined ? setFunc(data) : (setFunc = undefined);
  } catch (error) {
    setErrMsg !== undefined ? setErrMsg(error) : (setErrMsg = undefined);
  }
  setIsLoading !== undefined ? setIsLoading(false) : (setIsLoading = undefined);
};

export const deleteData = async (url) => {
  await axios.delete(url);
};

export const addData = (url, userData) => {
  axios.post(url, userData);
};

export const updateData = (url, data) => {
  axios.put(url, data);
};
