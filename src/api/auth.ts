import axios from "axios";

interface IAuthApi {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export const auth = (type: string, req: IAuthApi) => {
  return axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${type}?key=AIzaSyCEwcvhiu_XgueDrEsAYtWdS07i1SNgzrA`,
    req,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};
