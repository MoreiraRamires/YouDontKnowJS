var axios = require("axios");

axios.get("https://github.com/users/techtuxbr").then(function (data) {
  console.log(data);
});

