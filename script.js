// Script to pull random fortune from database


const addFortune = document.getElementById('addFortune');

let fortunes = '';
const backendUrl='https://20.169.32.254';
const backendPort=':3000';

function insertFortune(fortune) {
  return axios.post(`${backendUrl}${backendPort}`, { "fortune" : fortune })
    .then(function (response) {
    console.log(response);
    })
}


function refreshFortunes() {
  return axios.get(`${backendUrl}${backendPort}/list`)
  .then(function (response) {
    console.log(response);
    fortunes = response.data.results;
  })
  .catch((err) => {
    console.log(err);
  });
}



const fortune = document.getElementById('fortune')
const button = document.getElementById('btn');
button.addEventListener("click", () => {
    // get random fortune from fortunes
    fortune.innerText = fortunes[Math.floor(Math.random() * fortunes.length )].fortune;
})

const addButton = document.getElementById('addBtn');
addButton.addEventListener("click", () =>{

  // don't add empty fortunes
  if (! addFortune.value) return;
  insertFortune(addFortune.value)
  .then((result) => refreshFortunes())
  .then((result2) => {
    console.log(fortunes[fortunes.length - 1].fortune);
  });
  addFortune.value = '';
})

// fill arr with initial database
refreshFortunes()

