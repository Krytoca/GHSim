// P5.JS TEMPLATE - COMMENTS


// Declare Global Variables
let RED = "#ed0e09";
let ORANGE = "#ed6f08";
let YELLOW = "#ffe20a";
let GREEN = "#32e512";
let BLUE = "#0022ff";

let game;

let greenNote, redNote, yellowNote, blueNote, orangeNote, greenRedChord, greenYellowChord;
let greenBlueChord, redYellowChord, redBlueChord, redOrangeChord, yellowBlueChord, yellowOrangeChord, blueOrangeChord;
let greenRedYellowChord, redYellowBlueChord, yellowBlueOrangeChord;
// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(600, 700);

    // Initialize Global Variables
    game = new Game();
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    // RUN LOGIC
    // DRAW
    background(0);

    game.drawGameObjects();
    game.longNotes();
}

function keyPressed() {
    game.manageKeys();
}