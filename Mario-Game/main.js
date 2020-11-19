function preload() {
    world_start = loadSound("world_start.wav");
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