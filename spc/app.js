  let userchoicedisplay =document.getElementById('user-choice')
  let computerchoicedisplay =document.getElementById('computer-choice')
  let resultdisplay =document.querySelector('#result')
  let buttons= document.querySelectorAll('button')
  let userchoice;
  let computerChoice;


  buttons.forEach(val=>val.addEventListener('click',(e)=>{
     
     userchoice=e.target.id
     userchoicedisplay.innerHTML=userchoice
     generateComputerChoice()
     getResult()
     
  }))

  


  const generateComputerChoice= ()=>{
    let random = Math.floor(Math.random() * 3)+1;

if(random ===1)
{
    computerChoice="rock"
}
if(random === 2)
{
    computerChoice ="paper"
}
if(random ===3)
{
    computerChoice ="scissors"
}

computerchoicedisplay.innerHTML =computerChoice

  }


  function getResult()
  {
    if(computerChoice === userchoice)
    {
        result="its's a draw"
    }
    if(computerChoice === 'rock' && userchoice === 'scissors')
    {
        result ="you loose"
    }
    if(computerChoice === 'rock' && userchoice === 'paper' )
    {
        result =" you win"
    }
    if(computerChoice === 'paper' && userchoice === 'rock')
    {
        result ="you win"
    }
    if(computerChoice === 'paper' && userchoice === 'scissors')
    {
        result ="you loose"
    }
    if(computerChoice === 'scissors' && userchoice === 'paper')
    {
        result ='you loose'
    }
    if(computerChoice === 'scissors' && userchoice === 'rock')
    {
        result ='you win'
    }

    resultdisplay.innerHTML =result

  }

 