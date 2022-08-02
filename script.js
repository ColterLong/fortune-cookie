// Script to pull random fortune from database

let fortunes = ['You will have excellent luck today',
                'You will meet an unexpected friend today',
                'You will have no luck today, try tomorrow'];

const fortune = document.getElementById('fortune')
const button = document.getElementById('btn');
button.addEventListener("click", () => {
    // get random fortune from fortunes
    fortune.innerText = fortunes[Math.floor(Math.random() * fortunes.length )];
})