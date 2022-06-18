import axios from "axios";
import { OpenAPI } from "../../api/generated";
export default axios.create({
  baseURL: OpenAPI.BASE,
  headers: {
    "Content-type": "application/json",
  },
});
