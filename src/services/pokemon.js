import axios from "axios";

export const getData = async () => {
  try {
    const baseURL = `http://localhost:3001/data`;
    const response = await axios.get(baseURL);
    return {
      data: response.data,
      count: response.data.length,
    };
  } catch (error) {
    console.log("error", error);
  }
};
