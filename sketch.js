//Los círculos aparecerán al presionar "qwertyuiopasdf", ya sea en orden o jugando aleatoriamente.

var colorfondo = 255;

function setup() {
  createCanvas(600, 600);
  background(colorfondo, 20, 50);
}

function draw() {
  
  noFill();
  
  if (keyIsPressed) {
    if (key == "q" || key == "Q") {
      strokeWeight(37);
      stroke(0, 0, 170);
      point(300, 300);
    } else if (key == "w" || key == "W") {
      strokeWeight(18);
      stroke(5, 5, 180);
      ellipse(300, 300, 60, 60);
    } else if (key == "e" || key == "E") {
      strokeWeight(17);
      stroke(10, 10, 190);
      ellipse(300, 300, 100, 100);
    } else if (key == "r" || key == "R") {
      strokeWeight(16);
      stroke(20, 20, 200);
      ellipse(300, 300, 140, 140);
    } else if (key == "t" || key == "T") {
      strokeWeight(15);
      stroke(30, 30, 225);
      ellipse(300, 300, 180, 180);
    } else if (key == "y" || key == "Y") {
      strokeWeight(14);
      stroke(40, 40, 225);
      ellipse(300, 300, 220, 220);
    } else if (key == "u" || key == "U") {
      strokeWeight(13);
      stroke(50, 50, 225);
      ellipse(300, 300, 260, 260);
    } else if (key == "i" || key == "I") {
      strokeWeight(12);
      stroke(70, 70, 225);
      ellipse(300, 300, 300, 300);
    } else if (key == "o" || key == "O") {
      strokeWeight(9);
      stroke(90, 90, 225);
      ellipse(300, 300, 340, 340);
    } else if (key == "p" || key == "P") {
      strokeWeight(6);
      stroke(100, 100, 225);
      ellipse(300, 300, 380, 380);
    } else if (key == "a" || key == "A") {
      strokeWeight(5);
      stroke(110, 110, 225);
      ellipse(300, 300, 420, 420);
    } else if (key == "s" || key == "S") {
      strokeWeight(4);
      stroke(120, 120, 225);
      ellipse(300, 300, 460, 460);
    } else if (key == "d" || key == "D") {
      strokeWeight(3);
      stroke(155, 155, 225);
      ellipse(300, 300, 500, 500);
    } else if (key == "f" || key == "F") {
      strokeWeight(2);
      stroke(200, 200, 225);
      ellipse(300, 300, 540, 540);
    }
  }
}
