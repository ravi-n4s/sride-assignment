const axios = require("axios");
const apiKey = process.env.API_KEY;

const customInstance = axios.create();

customInstance.interceptors.request.use(
  (config) => {
    const time = new Date();
    console.log(
      `${config.method.toUpperCase()} request sent to ${
        config.url
      } at ${time.getTime()} - ${time.toLocaleString()}`
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

customInstance.interceptors.response.use(
  (response) => {
    const time = new Date();
    console.log(
      `RESPONSE - StatusCode:${
        response.status
      } at ${time.getTime()} - ${time.toLocaleString()} ` + "\n"
    );
    console.dir(response);
    return response;
  },
  (error) => {
    store.dispatch(setLoading(false));
    return Promise.reject(error);
  }
);

exports.default = customInstance;
