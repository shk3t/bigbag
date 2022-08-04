// import axios from "axios";

// let accessToken = "";

// const api = axios.create({
//   headers: { Authorization: `Bearer ${accessToken}` },
//   withCredentials: true,
// });
// export default api;

// api.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     originalRequest = error.config;
//     if (
//       error.response.status == 401 &&
//       originalRequest &&
//       !originalRequest._is_retry
//     ) {
//       originalRequest._is_retry = true;
//       try {
//         // TODO process error of expired refresh token
//         // TODO update isAuth if expired
//         await refreshTokens();
//         return api.request(originalRequest);
//       } catch (exception) {
//         // TODO
//       }
//     } else {
//       throw error;
//     }
//   }
// );

// export function saveAccessToken(token) {
//   localStorage.setItem("access_token", token);
// }

// export async function refreshTokens() {
//   const response = await axios.get(`${API_URL}/tokens/refresh`, {
//     withCredentials: true,
//   });
//   saveAccessToken(response.data.access_token);
// }

// // TODO move to store
// function isAuth() {
//   return True;
// }
