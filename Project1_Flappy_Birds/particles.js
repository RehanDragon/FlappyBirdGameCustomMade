const particlesArray = [];

class Particle{
    
    constructor(){
     
        this.x=bird.x;
        this.y=bird.y;//vertical position
        this.size=Math.random() * 7 + 3;
        //i want particles to spread vertically
        this.speedY=( Math.random() *1 ) - 0.5;
        //this will create multi level hue colors in particles
        this.color ='hsla('+hue+',100%,50%,0.8)';


    }

    //custom update function which will calculate position for each particle for every frame of animation


update(){
    //particles move to left as the game scrolls by
    this.x=this.x-gamespeed;
    this.y=this.y+this.speedY;
}




//custom draw method

draw(){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI * 2);
    ctx.fill();
}




}



//creating a custom function handleParticels

function handleParticels()
{
particlesArray.unshift(new Particle);

//cycle through entire particle array

//this is how we are dealing with an array in loop
for(i = 0; i < particlesArray.length;i++)
{

particlesArray[i].update();
particlesArray[i].draw();
}

//if more than 200, remove 20
if(particlesArray.length >200)
{


for(let i = 0;i <20;i++)
{
particlesArray.pop(particlesArray[i]);
}



}


}