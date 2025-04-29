import config from "../config.js";

// export const fetchApi = async (method, path) => {
//   const url = `${config.API_HOST}${path}`;
//   const response = await fetch(url, {
//     method: method,
//     headers: {
//       "x-rapidapi-key": config.API_KEY,
//       "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
//     },
//   });
//   const result = await response.json();
//   return result;
// };

/**
 * Fetch data from API
 * @param {string} method - HTTP method
 * @param {string} path - API path
 * @returns {Promise<object>} - Response data
 */
export const fetchApi = async (method, path) => {
  try {
    const url = `${config.API_HOST}${path}`;
    const response = await fetch(url, {
      method: method,
      headers: {
        "x-rapidapi-key": config.API_KEY,
        "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
      },
    });
    if (!response.ok) {
      throw new Error(response);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
};
