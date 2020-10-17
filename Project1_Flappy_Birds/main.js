// canvas constant
const canvas = document.getElementById('canvas1');


//context constant

const ctx = canvas.getContext('2d');

// canvas width is 600 and height 400
canvas.width=600;
canvas.height=400;

/* we will use let variables
because the values
 will change ofen */


//All are global variables

//it will be used when ever we press spacebar on the keyboard
let spacePressed = false;


//angle will move bird up and down slightly when idle
let angle=0;
// hue will help us to cycle us between red green and blue color spectrum
let hue=0;

//frame will keep track of our frame count of our animation loop so that we can add any periodic triggers to our game like we can add power ups

//using frame for obsticales like when pipe appear;
let frame=0;

// score will increment by one when ever we cross an obstacle
let score = 0;

//we use game speed to move obstacles, particles and background
//with this we can make parallax effect
let gamespeed=2;

// create gradient color from here
const gradient = ctx.createLinearGradient(0,0,0,70);

//creating 5 gradient color stops

gradient.addColorStop('0.4','#ffff');
gradient.addColorStop('0.5','#000');
gradient.addColorStop('0.55','#4040ff');
gradient.addColorStop('0.6','#000');
gradient.addColorStop('0.9','#fff');



//temporary variable for y cordinate
//this was just for testing
//let temp = canvas.height - 90;


//i create a custom function called animate

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);


    handleObstacles();  


//fill rectangle method will show our player for now

//cordinates 10,canvas.height - 1
//width x height = 50,50 
  
// ctx.fillRect(/*x cordinate*/ 10,/*y cordinate*/canvas.height - 90,50,50);



//this will calculate bird speed and position
bird.update();
//draws the bird
bird.draw();

//i droped the gradient color here
ctx.fillStyle=gradient;
ctx.font='90px Georgia';
ctx.strokeText(score,450,70);
ctx.fillText(score,450,70);



handleCollisions();
//yehan pa ya animate kr reha ha aur buggy bhe nai ho reha 
handleParticels(); 
//this line will stop the loop when you will collide the obstacle
if(handleCollisions() )
{return}


 
     //recursion <-- method implement it self
    //now we are creating a recuersion function where a program call its self from inside
    requestAnimationFrame(animate);

    //angle increase by every frame
    angle=angle+0.12;

    hue++;
    frame++;//this will increase frame count by 1 for every  animation loop cycle
}

//now calling my animate function
//this is how we drew our player on canvas
animate();

//KEY DOWN EVENT

//now i am creating an event listner for key down event
//it takes two attributes
//first one is the type of event which is key down
//ya key down ais ka apna builtin parameter ha

//second parameter is the call back function 
//that will run every time when that pirticular event occours


//these listners ha access to bultin event object
window.addEventListener('keydown',function(e)
{
//this is how we debug and check    
console.log(e.code);

if(e.code ==='Space')
{
    spacePressed=true;
    //this was just for testing
   // temp=temp-20;
}


}
);

//when up key is pressed
//ya keyup ais ka apna builtin parameter ha
window.addEventListener('keyup',function(e)


{

if(e.code==='Space')
{
    spacePressed=false;
}

}


);


const bang = new Image();
bang.src='bang.png';

//created a custom function named handleCollisions()
function handleCollisions()
{
for(let i=0;i< obstaclesArray.length;i++)

{
if(bird.x< obstaclesArray[i].x + obstaclesArray[i].width
    
    && bird.x + bird.width > obstaclesArray[i].x

    && ( (bird.y <0 + obstaclesArray[i].top && bird.y + bird.height > 0  )  ||
    
    (bird.y > canvas.height - obstaclesArray[i].bottom &&
        
     bird.y + bird.height  < canvas.height   )    ) )
{
//collision detection



ctx.drawImage(bang,bird.x,bird.y,50,50);
ctx.font = "25px Georgia";
ctx.fillStyle ='black';
ctx.fillText('Game Over','your score is'+score,160,canvas.height/2 -10 );
return true;
}


}

}
