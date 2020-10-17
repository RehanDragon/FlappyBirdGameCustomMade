//class is the blue print for objects
class Bird{
//mandatory constructor will hold the blueprint information

constructor(){
    this.x=150; //horizontal position
    this.y=200; // vertical y cordinate
    this.vy=0;  //velocity y this will determine the speed of bird that how fast it flows and moves up
    this.width=20; //width of bird
    this.height=20; // height of the bird
    this.weight=1; //weight of the bird this will be pulling our player down unless we flap our bird wings


}


//now creating a custom method in class

//here we will calculate position and speed of each character for each frame of animation
update(){

//angle is the variable we defined in main.js file
//math.sin() ,, just cycles between -1 and +1 , over and over again , it is a trignometric function
//this will create repetative up and down motion
let curve=Math.sin(angle) * 20;


//making some restrictions so that the player stays in the canvas

    if(this.y > canvas.height - (this.height * 3) + curve)
    {
        //created space between player and bottom edge of the screen by  (this.height * 3)
    this.y=canvas.height - (this.height * 3)+curve;
    this.vy =0;
    }

    else{



        //velocity y
//this.y plays vertical position will increase by velocity y 
this.vy = this.vy + this.weight;

this.vy=this.vy*0.9;

this.y=this.y+this.vy;

//these two line of code is making the player fall down and the longer it falls the faster it falls because vy is increasing endlessly for every frame and at the same time vy is added to the player vertical position making it move down
    }


if(this.y <0 + this.height)
{
    //zero on the y axis plus player height
    this.y = 0+this.height;
    this.vy=0;
}


//ya bna hua variable main.ja k ander boolean ha ausa use kia ha
if(spacePressed && this.y > this.height * 3)
{
    //ager space press ho to aisa flap kro
    this.flap(); 
}








}

//making a custom method by the name of draw
//we have to make some safe guards that the player do not leave the screen
draw(){
//first we are drawing the player and identifying that what is going on
ctx.fillStyle='red';
ctx.fillRect(this.x,this.y,this.width/*width of the rectangle */,this.height/*height of rectangle */);
//this will represent our player basic game skeleton

}

//third custom function which is flap

flap()
{
//every time we flap our wings the velocity y will decrease by 2

this.vy=this.vy-2;
}



}

//we are creating an object of bird class

/*
ya dekho k jo tumhare bird.js ha na 

wo he tumhare class ka nam ha 

aur aus k object bna ga


aisa hum na yehan pa constant kr dia ha

taka aus ke values change na hon 
*/
const bird = new Bird();/* bird ke jo class ha aus main mojude aik blue print mojude ha jis ka nam Bird ha to tum aus ka Constructor call kr wao  */
//new key word will call our class constructor ,will create a new blank object and assign its properties and values as defined in class constructor and have full access to lines 6 to 11
//this object will have the full access to full custom methods present in Bird constructor