function preload() {
    world_start = loadSound("world_start.wav");
    mario_jump = loadSound("jump.wav");
    mario_kick = loadSound("kick.wav")
    mario_coin = loadSound("coin.wav")
    mario_die = loadSound("mariodie.wav")
    mario_game_over = loadSound("gameover.wav")
    setSprites();
    MarioAnimation();
}

function setup() {

    canvas = createCanvas(1240, 336);
    canvas.parent('canvas');
    instializeInSetup(mario);
    video = createCapture(VIDEO);
    video.size(800, 400)
    video.parent('game_console')
    posenet = ml5.poseNet(video, modalLoaded)
    posenet.on('pose', GotResults)

}

function GotResults(results) {
    if (results.length > 0) {
        console.log(results)
        document.getElementById("game_status").innerHTML = "Game Is Loaded "
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

    }

}

function modalLoaded() {
    console.log("Modal Loaded Sucessfully")
}

function draw() {
    game()
}