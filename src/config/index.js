// export default {
//   baseUrl:
//     process.env.NODE_ENV === "production"
//       ? "http://production.com"
//       : "http://127.0.0.1:3000"
// };

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "http://production.com"
    : "";
