import axios from "axios";

export const getData = async (page, row) => {
  try {
    const baseURL = `http://localhost:3001/data?_page=${
      page + 1
    }&_limit=${row}`;
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
