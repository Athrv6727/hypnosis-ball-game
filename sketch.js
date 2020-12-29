var hypnoball;
var dataBase,position;
function setup(){
    dataBase = firebase.database();
    console.log(dataBase);

    createCanvas(500,500);

    hypnoball = createSprite(250,250,10,10);
    hypnoball.shapeColor = "red";

    var hypnoballPos=dataBase.ref('ball/position');
     hypnoballPos.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(position!== undefined){
    if(keyDown(RIGHT_ARROW)){
        writePosition(5,0);
    }
    else if(keyDown(LEFT_ARROW)){
        writePosition(-5,0); 
        
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-5);     
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,5);       
    }
    drawSprites();
    }
}
function writePosition(x,y){
    dataBase.ref('ball/position').set({
    'x':position.x+x,
    'y':position.y+y   
    });
}
function readPosition(data){
    position=data.val();
    hypnoball.x = 
    position.x;
    hypnoball.y = position.y;
}
function showError(){
console.log("We have faced an error in writing to the databasa")    
}