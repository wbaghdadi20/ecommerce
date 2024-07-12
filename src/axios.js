import axios from "axios";

const instance = axios.create({
  baseURL:
    // "http://127.0.0.1:5001/clone-c002b/us-central1/api", // local host
    "https://api-nbabtgg6ba-uc.a.run.app",
});

export default instance;
