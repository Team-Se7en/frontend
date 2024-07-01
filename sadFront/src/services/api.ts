import axios from "axios";

const api = axios.create({
  baseURL: "https://seven-apply.liara.run/",
});

export default api;