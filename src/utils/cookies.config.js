
import Cookies from "js-cookie";

export const BASE_URL =
  process.env.REACT_APP_SERVER_URL ||
  "https://fibonacci-mlm-engine.herokuapp.com/graphql";

class Auth {
  getCipher() {
    return Cookies.get("/t") || null;
  }

  setCipher(token){
    Cookies.set("/t", token);
  }

  clearCipher() {
    Cookies.remove("/t");
  }
}

export default new Auth();