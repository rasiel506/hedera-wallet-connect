import axios from "axios";

const baseURL = "https://otia.app/wh1";
export const postUserId = async (id: string) => {
  const formData = new FormData();
  formData.append('user',id)
  axios
    .post(baseURL, formData)
    .then((res) => {
      console.log("USER ID SENT");
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
};
