 
 let grid = document.querySelector('.grid')
 



    for(let i=0;i<12;i++)
    {
         
        let squares=document.createElement('div')
        squares.style.border="2px solid black"
        squares.style.margin="10px "
        squares.style.width="200px "
        squares.style.height="200px "

        squares.setAttribute('class','square')
        squares.setAttribute('id',`box-${i}`)
        grid.appendChild(squares)
    }


    const squares = document.querySelectorAll('.square')
    const mole= document.querySelector('.mole')
    const time = document.querySelector('#time')
    const score = document.querySelector('#score')
    let timerId
    let hitposition     


    let result=0;
    let currentTime = 10;

    function randomSquare()
    {
        squares.forEach(val=>val.classList.remove('mole'))
        let randomposition = squares[Math.floor(Math.random()*12)]  
        randomposition.classList.add('mole')
        hitposition = randomposition.id

    }


    function movemole()
    {
        
        timerId = setInterval(randomSquare,500)
    }


 
 movemole()
 
  
 squares.forEach(val=>val.addEventListener('mousedown',(e)=>{
    if(val.id==hitposition)
        {
            
            result++
            score.innerHTML=result
            hitposition=null
        }
        hitposition=null
 }))


 function countDown()
 {
currentTime --
time.textContent =currentTime 
if(currentTime ==0)
{
    clearInterval(countDownTimerId)
    alert('game over your final score is'+result)
    clearInterval(timerId)
}
 }

 let countDownTimerId= setInterval(countDown, 1000)