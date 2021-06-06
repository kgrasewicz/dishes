import { SubmissionError } from "redux-form";
import axios from "axios";



function submit(values) {
  const jsonData = JSON.stringify(values);

  console.log(jsonData);
  return axios
    .post("https://frosty-wood-6558.getsandbox.com:443/dishes", jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
        document.querySelector(".confirmation").classList.add("active");
        setTimeout(window.location.reload(true), 5000) 
    })
    .catch((error) => {
      throw new SubmissionError({
        ...error.response.data,
      });
    });
}

export default submit;
