const color = ["green","red","yellow","brown"];
const btn = document.getElementById('btn');
const colors = document.querySelector(".color");

btn.addEventListener('click',()=>{
    const randomNumber = Math.floor(Math.random()*color.length);
    console.log(randomNumber);
    // const randomNumber = 2; //2 is index
    document.body.style.backgroundColor = color[randomNumber];
    colors.textContent = color[randomNumber];
})