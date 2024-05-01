const axios = require('axios');

module.exports = function(apiUrl) {
  axios.get(apiUrl)
    .then(response => {
      console.log('Data received:', JSON.stringify(response.data));
    })
    .catch(error => {
      console.error('Failed to fetch data:', error);
    });
};
