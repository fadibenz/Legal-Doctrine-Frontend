import axios from "axios";

export const getData = async () => {
  try {
    const baseURL = `/pokemon.json`;
    const response = await axios.get(baseURL);
    console.log('response', response)
    return {
      data: response.data,
      count: response.data.length,
    };
  } catch (error) {
    console.log("error", error);
  }
};
