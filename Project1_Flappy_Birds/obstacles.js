const obstaclesArray=[];

//i need x,y,width and height

class Obstacle{

constructor()
{
    // height of the top obstacle
    //it will be a random number between canvas
    this.top=( Math.random() *  canvas.height/3)+20;
    
    
    // height of the botton obstacle
    this.bottom=(Math.random() * canvas.height/3)+20;


    this.x=canvas.width;

    this.width=20;

    this.color='hsl('+hue+'100%,50%)';

    this.counted=false;

}




//custom method draw() which will draw 2 rectangles


draw()
{
    ctx.fillStyle=this.color;

    ctx.fillRect(this.x,0,this.width,this.top);//draw top obstacle
    ctx.fillRect(this.x,canvas.height - this.bottom,this.width,this.bottom/* height of the bottom obstacle */  );//draw bottom obstacle


}



update()
{
    this.x = this.x-gamespeed;
    if(!this.counted && this.x < bird.x)
    {
        score++;
        this.counted=true;
    }
    this.draw();
}




}



//creating a custom function

function handleObstacles()
{
    /*increasing to frame%60  will increace the space between 2 pipes
    decreasing it will decrease the space between 2 pipes
    */
    if(frame%25 ===0)
    {
        //here by using this i can create enemy or power up 
        //every 50 frames we use unshift array method on obstacle array
        obstaclesArray.unshift(new Obstacle);
    
    }

    for(let i=0; i<obstaclesArray.length;i++)
        {

            obstaclesArray[i].update();
        }


        //for trail particles

        if(obstaclesArray.length > 20)
        {
            obstaclesArray.pop( obstaclesArray[0]  );

        }

}