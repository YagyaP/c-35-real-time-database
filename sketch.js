var bigball;
var database,position;

function setup(){
    database=firebase.database();
    console.log(database);
    createCanvas(500,500);
   bigball = createSprite(250,250,10,10);
    bigball.shapeColor = "red";

var bigballposition=database.ref('ball/position');
bigballposition.on("value",readposition,showerror)


}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readposition(data){
    position=data.val();
    console.log(position.x);
    bigball.x=position.x;
    bigball.y=position.y;
}

 function showerror(){
     console.log("error in reading from database");
 }

function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })
}
