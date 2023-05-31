import axios,{AxiosInstance  } from "axios";

const SERVE_URL= process.env.VUE_APP_BASE_URL

const instance: AxiosInstance=axios.create({
    baseURL:SERVE_URL,
    timeout:30_000
});

export default instance;