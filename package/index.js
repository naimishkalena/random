import axios from "axios";

const getAnimeQuote = "https://animechan.xyz/api/random";

const newMethosd = () => {
  axios
    .get(getAnimeQuote)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

newMethosd();
