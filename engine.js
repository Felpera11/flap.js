const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const frameRate = 1000 / 60;
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

const controller = new Controller("KeyW", "KeyD", "KeyS", "KeyA", "Space");
const controller2 = new Controller("ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", "Space");

ctx.fillStyle = "black";


entities = [];



player1 = new Player(new vector2(), 35, 4, "black", controller);
player1.setCollider();
entities.push(player1);



function gameLoop()
{
    let length = entities.length; 

    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    for (let i = 0; i < length; i++) {
        entities[i].tick();
        entities[i].render();      
    }
}


setInterval(gameLoop, frameRate)


  