class GuitarString {
    // Properties (State)
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    // Methods (Behaviour)
    show() {
        noStroke();
        fill(90);
        rectMode(CENTER);
        rect(this.x, this.y, 5, 800);
    }
}

class GuitarFret {
    // Properties (State)
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    // Methods (Behaviour)
    show() {
        strokeWeight(7);
        stroke(255);
        fill(0);
        ellipse(this.x, this.y, 45)
    }
}

class FretBackground {
    // Properties (State)
    constructor (x, y, col) {
        this.x = x;
        this.y = y;
        this.col = col;
    }
    // Methods (Behaviour)
    show() {
        noStroke();
        fill(this.col);
        ellipse(this.x, this.y, 60)
    }
}

class GuitarNote {
    // Properties (State)
    constructor (x, y, col) {
        this.x = x;
        this.y = y;
        this.col = col;
    }
    // Methods (Behaviour)
    show() {
        strokeWeight(7);
        stroke(this.col);
        fill(0);
        ellipse(this.x, this.y, 45)
    }

    move() {
        this.y += 4;
    }
}
class FretBreak {
    // Properties (State)
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    // Methods (Behaviour)
    show() {
        noStroke();
        fill(40);
        rectMode(CORNER);
        rect(this.x, this.y, 600, 5);
    }
}

class NoteSound {
    constructor () {
        soundFormats("mp3");
        greenNote = loadSound("Sounds/Green Note.mp3");
        redNote = loadSound("Sounds/Red Note.mp3");
        yellowNote = loadSound("Sounds/Yellow Note.mp3");
        blueNote = loadSound("Sounds/Blue Note.mp3");
        orangeNote = loadSound("Sounds/Orange Note.mp3");
        greenRedChord = loadSound("Sounds/Green Red Chord.mp3");
        greenYellowChord = loadSound("Sounds/Green Yellow Chord.mp3");
        greenBlueChord = loadSound("Sounds/Green Blue Chord.mp3");
        redYellowChord = loadSound("Sounds/Red Yellow Chord.mp3");
        redBlueChord = loadSound("Sounds/Red Blue Chord.mp3");
        redOrangeChord = loadSound("Sounds/Red Orange Chord.mp3");
        yellowBlueChord = loadSound("Sounds/Yellow Blue Chord.mp3");
        yellowOrangeChord = loadSound("Sounds/Yellow Orange Chord.mp3");
        blueOrangeChord = loadSound("Sounds/Blue Orange Chord.mp3");
        greenRedYellowChord = loadSound("Sounds/Green Red Yellow Chord.mp3");
        redYellowBlueChord = loadSound("Sounds/Red Yellow Blue Chord.mp3");
        yellowBlueOrangeChord = loadSound("Sounds/Yellow Blue Orange Chord.mp3");
    }
}