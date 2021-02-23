const axios = require('./axios');
const requests = require('./requests');

let myOriginals = [];
// console.log('inside server', myTrendingTitle,myTrendingPoster)
function fetchOriginals() {
  return new Promise((resolve, reject) => {
      axios.get(requests.fetchNetflixOriginals).then((response) => {
        response.data.results.forEach(function(res) { 
          if(res.name != undefined){
            myOriginals.push([res.name,res.backdrop_path])
          }
        })
      resolve({myOriginals});
      })
  });
}
fetchOriginals()
module.exports = {
  fetchOriginals
}