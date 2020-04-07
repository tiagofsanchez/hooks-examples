import axios from "axios";

//params for the airtable
const app_id = process.env.REACT_APP_AIRTABLE_BASE_ID;
const app_key = process.env.REACT_APP_AIRTABLE_API_KEY;

const classView = "classForm";
const hooksView = "hooksForm";

export const addEmailClassForm = (name, email) => {
  const data = {
    records: [
      {
        fields: {
          Name: name,
          Email: email,
        },
      },
    ],
  };
  console.log(app_id);
  

  let url = "https://api.airtable.com/v0/" + app_id + "/" + classView;
  let axiosConfig = {
    headers: {
      Authorization: "Bearer " + app_key,
      "Content-Type": "application/json",
    },
  };

  axios
    .post(url, data, axiosConfig)
    .then((resp) => console.log("Email received"))
    .catch((error) => console.log(error));
};

export const addEmailHooksForm = (name, email) => {
  const data = {
    records: [
      {
        fields: {
          Name: name,
          Email: email,
        },
      },
    ],
  };

  let url = "https://api.airtable.com/v0/" + app_id + "/" + hooksView;
  let axiosConfig = {
    headers: {
      Authorization: "Bearer " + app_key,
      "Content-Type": "application/json",
    },
  };

  axios
    .post(url, data, axiosConfig)
    .then((resp) => console.log("Email received"))
    .catch((error) => console.log(error));
};
