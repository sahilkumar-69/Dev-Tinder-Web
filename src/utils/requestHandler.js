import axios from "axios";

const requestHandler = async (url, method, data) => {
  try {
    const response = await axios({
      url: url,
      method: method,
      data: data,
      withCredentials: true,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export default requestHandler;
