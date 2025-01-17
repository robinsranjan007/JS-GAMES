const gird=document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')

const blockWidht= 100
const blockheight= 20
const boardwidth=785
const boardheight=400

const userStart=[230,10]
let currentPosition = userStart

let ballStart =[270,40]
let ballCureentPosition=ballStart
let ballDiameter=20

let xDirection =-2
let yDirection =-2


let timerId

//create Block 

class Block{
    constructor(xAxis,Yxis)
    {
this.bottomLeft=[ xAxis,Yxis]
this.bottomRight=[xAxis+blockWidht,Yxis]
this.topLeft=[xAxis,Yxis+blockheight]
this.topRight=[xAxis+blockWidht,Yxis+blockheight]
    }
}

//all my bocks
const blocks=[

    new Block(10,330),
    new Block(120,330),
    new Block(230,330),
    new Block(340,330),
    new Block(350,330),
    new Block(460,330),
    new Block(570,330),
    new Block(680,330),
    
    


    new Block(10,300),
    new Block(120,300),
    new Block(230,300),
    new Block(340,300),
    new Block(350,300),
    new Block(460,300),
    new Block(570,300),
    new Block(680,300),



    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(340,270),
    new Block(350,270),
    new Block(460,270),
    new Block(570,270),
    new Block(680,270),
   //-----------------------
   new Block(10,240),
   new Block(120,240),
   new Block(230,240),
   new Block(340,240),
   new Block(350,240),
   new Block(460,240),
   new Block(570,240),
   new Block(680,240),

   //------------------------------
   new Block(10,210),
   new Block(120,210),
   new Block(230,210),
   new Block(340,210),
   new Block(350,210),
   new Block(460,210),
   new Block(570,210),
   new Block(680,210),
//-----------------------------
 
 
 

]



//draw my block function


function addblocks()
 {
    
for (let i =0;i<blocks.length;i++)
{
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left=blocks[i].bottomLeft[0] +'px'
    block .style.bottom=blocks[i].bottomLeft[1]+'px'
    gird.appendChild(block)
}


 }

addblocks()


 
console.log(blocks[0])


//add user

const user =document.createElement('div')
user.classList.add('user')
drawUser()
gird.appendChild(user)


function drawUser()
{
user.style.left=currentPosition[0]+'px'
user.style.bottom=currentPosition[1] + 'px'
}

//draw ball

function drawball()
{
ball.style.left=ballCureentPosition[0]+'px'
ball.style.bottom=ballCureentPosition[1]+'px'
}



//move user

function moveuser(e)
{
    switch(e.key){
        case 'ArrowLeft':
            if(currentPosition[0]>0)
            {
                currentPosition[0] -=10
                drawUser()
            }
        break;
        case 'ArrowRight':
            if(currentPosition[0]<boardwidth-blockWidht-15)
            {
                currentPosition[0] +=10
                drawUser()
            }
        break;

    }
}


document.addEventListener('keydown',moveuser)


// add ball

const ball = document.createElement('div')
ball.classList.add('ball')
drawball()
gird.appendChild(ball)


//move ball

function moveball()
{
    ballCureentPosition[0]+=xDirection
    ballCureentPosition[1]+=yDirection
    drawball()
}

timerId=setInterval(moveball,30)

//check for collisions

function checkForCollision()
{
//check for block collision

for(let i =0;i<blocks.length;i++)
{
if(
    (ballCureentPosition[0]>blocks[i].bottomLeft[0]  && ballCureentPosition[1] <blocks[i].bottomRight[0]) &&
    ((ballCureentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCureentPosition[1] < blocks[i].topLeft[1])
)
{
    const allBlocks = Array.from(document.querySelectorAll('.block'))
    allBlocks[i].classList.remove('block')
    blocks.splice(i,1)
    changeDirection()
    score++
    scoreDisplay.innerHTML=score

    if(blocks.length === 0)
    {
        scoreDisplay.innerHTML = 'You Win'
        clearInterval(timerId)
        document.removeEventListener('keydown',moveUser)
    }

}
}


    //check for wall collisions

    if(ballCureentPosition[0]>=(boardwidth - ballDiameter) ||
     ballCureentPosition[1] >= (boardheight-ballDiameter) ||
     ballCureentPosition[0] <=0
    ){
        changeDirection()
    }

//check for gameover
if(ballCureentPosition[1]<=0)
{
    clearInterval(timerId)
    scoreDisplay.innerHTML ="You lose"
    document.removeEventListener('keydown')
}

// check for use collisions

if(ballCureentPosition[0] > currentPosition[0] && ballCureentPosition[0]<currentPosition[0] +blockWidht &&
    (ballCureentPosition[1]>currentPosition[1] && ballCureentPosition[1] <currentPosition[1] + blockheight)
)
{
    changeDirection()
}

}

function changeDirection()
{
if(xDirection ==2 && yDirection == 2)
{
    yDirection-=2
    return
}
if (xDirection == 2 && yDirection == -2)
     {
        xDirection =2
        return
     }
if(xDirection == -2 && yDirection == -2)
{
    yDirection =2
    return
}
if(xDirection == -2 && yDirection ==2)
{
    xDirection =2
    retrun
}

}