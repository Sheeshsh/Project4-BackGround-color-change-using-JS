const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',()=>{
    let hexColor = '#';
    for(let i = 0; i < 6; i++){ 
        hexColor = hexColor + hex[getRandomNumber()];
        // why 6 ? Bcos i hex color codes there are 6 values eg. #FFFFFF 
        // just try to debug this for loop by own .. 
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

