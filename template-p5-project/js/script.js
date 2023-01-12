/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let size = 200;
let topX = 50;
let topY = 50;

let button;

let winWidth = (size*3)+(topX+topY);
let winHeight = (size*3)+(topX+topY);

//1 = X 2 = O

let myArray = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 2, 2]
    ];

/**
Description of preload
*/
function preload() {

}

/**
Description of setup
*/
function setup() {
    createCanvas(winWidth, winHeight);
    background(125);
}

function drawBoard() {

//GRID
    push();

    fill(200);
    rect(topX, topY, size, size);
    rect(topX+size, topY, size, size);
    rect(topX+size*2, topY, size, size);

    rect(topX, topY +size, size, size);
    rect(topX + size, topY+size, size, size);
    rect(topX + size*2, topY+size, size, size);

    rect(topX, topY+size*2, size, size);
    rect(topX+size, topY+size*2, size, size);
    rect(topX+size*2, topY+size*2, size, size);

    pop();

//INSIDE BOXES
    //line 1
      
    push();
    topX += size/2;
    topY += size/2;

    fill(50)
    text(myArray[0][0], topX, topY);
    text(myArray[0][1], topX + size, topY);
    text(myArray[0][2], topX + size*2, topY);

    //line 2
    text(myArray[1][0], topX, topY+ size);
    text(myArray[1][1], topX + size, topY+ size);
    text(myArray[1][2], topX + size*2,topY+ size);

    //line 3
    text(myArray[2][0], topX, topY+ size*2);
    text(myArray[2][1], topX + size, topY+ size*2);
    text(myArray[2][2], topX + size*2,topY+ size*2);

    pop();

    topX = 50;
    topY = 50;
}

function mousePressed() {
    if (mouseX >= topX && mouseX <= topX+size) {
        if(mouseY >= topY && mouseY <= topY+size){
            console.log("1");
        } else if(mouseY >= topY+size && mouseY <= topY+size*2){
            console.log("2");
        } else if(mouseY >= topY+size*2 && mouseY <= topY+size*3){
            console.log("3");
        }

    } else if (mouseX >= topX+size && mouseX <= topX+size*2){
        if(mouseY >= topY && mouseY <= topY+size){
            console.log("4");
        } else if(mouseY >= topY+size && mouseY <= topY+size*2){
            console.log("5");
        } else if(mouseY >= topY+size*2 && mouseY <= topY+size*3){
            console.log("6");
        }
    }
    else if (mouseX >= topX+size*2 && mouseX <= topX+size*3){
        if(mouseY >= topY && mouseY <= topY+size){
            console.log("7");   
        } else if(mouseY >= topY+size && mouseY <= topY+size*2){
            console.log("8");
        } else if(mouseY >= topY+size*2 && mouseY <= topY+size*3){
            console.log("9");
        }
    }
}
/**
Description of draw()
*/
function draw() {
    drawBoard();
}