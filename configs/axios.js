import axios from "axios";

//let url = "http://palmieriuniformes.nodejs7602.kinghost.net:21489";
let url = "http://localhost:21489";

const api = axios.create({
  baseURL: url,
});

export default api;
