var axios = require("axios");
let cep = `03515000`

axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(function (response) {

  console.log(response.data);


})


