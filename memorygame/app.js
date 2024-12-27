const cardArray=[
    {
        name:"naruto",
        src:'images/naruto.jpg'
    },
    {
        name:"sasuke",
        src:'images/sasuke.jpg'
    },
    {
        name:"sakura",
        src:'images/sakura.jpg'
    },
    {
        name:"kakshi",
        src:'images/kakshi.jpg'
    },
    {
        name:'jiraya',
        src:'images/jiraya.jpg'
    },
    {
        name:"gara",
        src:'images/gara.jpg'
    },
    {
        name:"naruto",
        src:'images/naruto.jpg'
    },
    {
        name:"sasuke",
        src:'images/sasuke.jpg'
    },
    {
        name:"sakura",
        src:'images/sakura.jpg'
    },
    {
        name:"kakshi",
        src:'images/kakshi.jpg'
    },
    {
        name:'jiraya',
        src:'images/jiraya.jpg'
    },
    {
        name:"gara",
        src:'images/gara.jpg'
    }
]

let sortedArray= cardArray.sort(()=> 0.5-Math.random())
let grid= document.querySelector('#grid')
let cardChosen=[]
let cardsChosenIds=[]

const cardWon=[]
const resultdisplay = document.querySelector('#result')




function createBoard()
{
    cardArray.forEach((val,index)=>{
    const card=document.createElement('img')
    card.setAttribute('src','images/pakkun.png')
    card.setAttribute('id',index)
    card.style.width="200px"
    grid.appendChild(card)
     
    card.addEventListener('click', flipcard)
    console.log(sortedArray)
})

}

createBoard()
 


function checkMath()
{
    let cards=    document.querySelectorAll('img') 
    let cardsChosenIdsOne= cardsChosenIds[0]
    let cardsChosenIdsTwo= cardsChosenIds[1]
    console.log(cards)

    if(cardsChosenIdsOne === cardsChosenIdsTwo)
    {
        cards[cardsChosenIdsOne].setAttribute('src',`images/pakkun.png`)
        cards[cardsChosenIdsTwo].setAttribute('src',`images/pakkun.png`)
        alert('you chose the same card')
    }

   else if(cardChosen[0]==cardChosen[1])
    {
        alert("you found a match")
        cards[cardsChosenIdsOne].setAttribute('src',`images/white.png`)
        cards[cardsChosenIdsTwo].setAttribute('src',`images/white.png`)
        cards[cardsChosenIdsOne].removeEventListener('click',flipcard)
        cards[cardsChosenIdsTwo].removeEventListener('click',flipcard)
        cardWon.push(cardChosen)
    }
    else
    {
        cards[cardsChosenIdsOne].setAttribute('src',`images/pakkun.png`)
        cards[cardsChosenIdsTwo].setAttribute('src',`images/pakkun.png`)
        alert('try again')

    }
        cardChosen =[]
        cardsChosenIds = []

        if(cardWon.length==(cardArray.length/2))
        {
            resultdisplay.innerHTML="Congratulations you have won the game"
        }
}


function flipcard()
{
    
  let id=  this.getAttribute('id')
  let names=cardArray[id].name

  cardChosen.push(names)
  cardsChosenIds.push(id)

  
  this.setAttribute('src',`images/${names}.jpg`)
  
  if(cardChosen.length ==2)
  {
    setTimeout(checkMath,500)
  }
 
}


