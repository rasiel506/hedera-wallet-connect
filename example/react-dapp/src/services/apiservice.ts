import axios from "axios";

const baseURL = "https://otia.app/wh1";
export const postUserId = async (id: string) => {
  axios
    .post(baseURL, { user: id })
    .then((res) => {
      console.log("USER ID SENT");
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
};
