import config from "./config";
import axios from "axios";

axios.get(`${config.serverURL}/api/contests`).then((resp) => {
  console.log(resp.data);
});
