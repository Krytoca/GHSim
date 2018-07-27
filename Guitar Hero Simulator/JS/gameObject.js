class Game {
    // Properties (Control State)
    constructor () {
        this.guitarString1 = new GuitarString(100, 500);
        this.guitarString2 = new GuitarString(200, 500);
        this.guitarString3 = new GuitarString(300, 500);
        this.guitarString4 = new GuitarString(400, 500);
        this.guitarString5 = new GuitarString(500, 500);
    
        this.guitarFret1 = new GuitarFret(100,100);
        this.guitarFret2 = new GuitarFret(200,100);
        this.guitarFret3 = new GuitarFret(300,100);
        this.guitarFret4 = new GuitarFret(400,100);
        this.guitarFret5 = new GuitarFret(500,100);
        
        this.fretB1 = new FretBackground(100,100, GREEN);
        this.fretB2 = new FretBackground(200,100, RED);
        this.fretB3 = new FretBackground(300,100, YELLOW);
        this.fretB4 = new FretBackground(400,100, BLUE);
        this.fretB5 = new FretBackground(500,100, ORANGE);

        this.fretBreak1 = new FretBreak(0,100);
        this.fretBreak2 = new FretBreak(0,250);
        this.fretBreak3 = new FretBreak(0,400);
        this.fretBreak4 = new FretBreak(0,550);
        this.fretBreak5 = new FretBreak(0,700);

        this.greenNote = new NoteSound();
        this.redNote = new NoteSound();
        this.yellowNote = new NoteSound();
        this.blueNote = new NoteSound();
        this.orangeNote = new NoteSound();
        this.greenRedChord = new NoteSound();
        this.greenYellowChord = new NoteSound();
        this.greenBlueChord = new NoteSound();
        this.redYellowChord = new NoteSound();
        this.redBlueChord = new NoteSound();
        this.redOrangeChord = new NoteSound();
        this.yellowOrangeChord = new NoteSound();
        this.blueOrangeChord = new NoteSound();

        this.guitarNotes = [];
    }
    //Methods (Control Behaviour)
    drawGameObjects() {
        this.fretBreak1.show();

        this.guitarString1.show();
        this.guitarString2.show();
        this.guitarString3.show();
        this.guitarString4.show();
        this.guitarString5.show();
    
        this.fretB1.show();
        this.fretB2.show();
        this.fretB3.show();
        this.fretB4.show();
        this.fretB5.show();
    
        this.guitarFret1.show();
        this.guitarFret2.show();
        this.guitarFret3.show();
        this.guitarFret4.show();
        this.guitarFret5.show();

        
        this.fretBreak2.show();
        this.fretBreak3.show();
        this.fretBreak4.show();
        this.fretBreak5.show();

        for (let i = 0; i < this.guitarNotes.length; i++) {
            this.guitarNotes[i].show();  
            this.guitarNotes[i].move();   
            if (this.guitarNotes[i] > height) {
                this.guitarNotes[i].pop(); 
            }
        }

    }

    manageKeys() {
        if (keyCode == 65) {
            this.guitarNotes.push(new GuitarNote (100, 100, GREEN));
            greenNote.playMode("restart");
            greenNote.play();
        }
        if (keyCode == 83) {
            this.guitarNotes.push(new GuitarNote (200, 100, RED));
            redNote.play();
            redNote.playMode("restart");
        }
        if (keyCode == 68) {
            this.guitarNotes.push(new GuitarNote (300, 100, YELLOW));
            yellowNote.play();
            yellowNote.playMode("restart");
        }
        if (keyCode == 70) {
            this.guitarNotes.push(new GuitarNote (400, 100, BLUE));
            blueNote.play();
            blueNote.playMode("restart");
        }
        if (keyCode == 71) {
            this.guitarNotes.push(new GuitarNote (500, 100, ORANGE));
            orangeNote.play();
            orangeNote.setVolume(4);
            orangeNote.playMode("restart");
        }
        if (keyCode == 81) {
            this.guitarNotes.push(new GuitarNote (100,100, GREEN));
            this.guitarNotes.push(new GuitarNote (200,100, RED));
            greenRedChord.play();
            greenRedChord.playMode("restart");
        }
        if (keyCode == 87) {
            this.guitarNotes.push(new GuitarNote (100,100, GREEN));
            this.guitarNotes.push(new GuitarNote (300,100, YELLOW));
            greenYellowChord.play();
            greenYellowChord.playMode("restart");
        }
        if (keyCode == 69) {
            this.guitarNotes.push(new GuitarNote (100,100, GREEN));
            this.guitarNotes.push(new GuitarNote (400,100, BLUE));
            greenBlueChord.play();
            greenBlueChord.playMode("restart");
        }
        if (keyCode == 82) {
            this.guitarNotes.push(new GuitarNote (200,100, RED));
            this.guitarNotes.push(new GuitarNote (300,100, YELLOW));
            redYellowChord.play();
            redYellowChord.playMode("restart");
        }
        if (keyCode == 84) {
            this.guitarNotes.push(new GuitarNote (200,100, RED));
            this.guitarNotes.push(new GuitarNote (400,100, BLUE));
            redBlueChord.play();
            redBlueChord.playMode("restart");
        }
        if (keyCode == 89) {
            this.guitarNotes.push(new GuitarNote (200,100, RED));
            this.guitarNotes.push(new GuitarNote (500,100, ORANGE));
            redOrangeChord.play();
            redOrangeChord.playMode("restart");
        }
        if (keyCode == 85) {
            this.guitarNotes.push(new GuitarNote (300,100, YELLOW));
            this.guitarNotes.push(new GuitarNote (400,100, BLUE));
            yellowBlueChord.play();
            yellowBlueChord.playMode("restart");
        }
        if (keyCode == 73) {
            this.guitarNotes.push(new GuitarNote (300,100, YELLOW));
            this.guitarNotes.push(new GuitarNote (500,100, ORANGE));
            yellowOrangeChord.play();
            yellowOrangeChord.playMode("restart");
        }
        if (keyCode == 79) {
            this.guitarNotes.push(new GuitarNote (400,100, BLUE));
            this.guitarNotes.push(new GuitarNote (500,100, ORANGE));
            blueOrangeChord.play();
            blueOrangeChord.playMode("restart");
        }
        if (keyCode == 90) {
            this.guitarNotes.push(new GuitarNote (100,100, GREEN));
            this.guitarNotes.push(new GuitarNote (200,100, RED));
            this.guitarNotes.push(new GuitarNote (300,100, YELLOW));
            greenRedYellowChord.play();
            greenRedYellowChord.playMode("restart");
        }
        if (keyCode == 88) {
            this.guitarNotes.push(new GuitarNote (200,100, RED));
            this.guitarNotes.push(new GuitarNote (300,100, YELLOW));
            this.guitarNotes.push(new GuitarNote (400,100, BLUE));
            redYellowBlueChord.play();
            redYellowBlueChord.playMode("restart");
        }
        if (keyCode == 67) {
            this.guitarNotes.push(new GuitarNote (300,100, YELLOW));
            this.guitarNotes.push(new GuitarNote (400,100, BLUE));
            this.guitarNotes.push(new GuitarNote (500,100, ORANGE));
            yellowBlueOrangeChord.play();
            yellowBlueOrangeChord.playMode("restart");
        }
    }
    longNotes() {
        if (keyIsDown(49)) {
            this.guitarNotes.push(new GuitarNote (100, 100, GREEN));
            greenNote.play();
        }
        if (keyIsDown(50)) {
            this.guitarNotes.push(new GuitarNote (200, 100, RED));
            redNote.play();
        }
        if (keyIsDown(51)) {
            this.guitarNotes.push(new GuitarNote (300, 100, YELLOW));
            yellowNote.play();
        }
        if (keyIsDown(52)) {
            this.guitarNotes.push(new GuitarNote (400, 100, BLUE));
            blueNote.play();
        }
        if (keyIsDown(53)) {
            this.guitarNotes.push(new GuitarNote (500, 100, ORANGE));
            orangeNote.play();
        }
    }
}