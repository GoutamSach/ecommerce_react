import axios from "axios";

const Params = {
  header: { Authorization: "bearer" + process.REACT_APP_STRIPE_APP_KEY },
};

export const dataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_DEV_URL + url,
      Params
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
