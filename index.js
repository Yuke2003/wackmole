const square = document.querySelectorAll('.square');
const mole = document.querySelector('.mole')
const score = document.getElementById('score')
const time = document.getElementById('time')

let result =0;
let hitposition;
let timeId = null;
let currentTime =10;
setInterval(randomposition,1000); 
function randomposition(){
    square.forEach(squares =>{
        squares.classList.remove('mole')
    })
    let random = square[Math.floor(Math.random()*9)];
    random.classList.add('mole');
    hitposition = random.id;
}
function movemole(){
    square.forEach((squares)=>{
        squares.addEventListener('mousedown',()=>{
            if(squares.id===hitposition){
                result+=1
            }
            score.innerHTML=result
        })
    })
}
movemole()

function count(){
    currentTime--;
    time.innerHTML=currentTime;
    if(currentTime==0){
        clearInterval(timer)
        alert('game over your score is:'+result)
        clearInterval(movemole)
    }
}
let timer = setInterval(count,1000);
