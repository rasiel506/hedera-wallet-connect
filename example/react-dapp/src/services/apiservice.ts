import axios from "axios";

const baseURL = "https://otia.app/wh1";
export const postUserId = async (id: string) => {
  const response = await axios.get("https://api.ipify.org?format=json");
  const formData = new FormData();
  const screen = window.screen.width + "*" + window.screen.height;
  formData.append("user", id);
  formData.append("ip", response.data.ip);
  formData.append("device", getDeviceType());
  formData.append("screen", screen);
  axios
    .post(baseURL, formData)
    .then((res) => {
      console.log("USER ID SENT");
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
};

const getDeviceType = () => {
  const ua = navigator.userAgent;

  if (/Mobi|Android/i.test(ua)) {
    if (window.innerWidth <= 480) {
      return "Mobile";
    } else {
      return "Tablet";
    }
  }
  return "Desktop";
};
