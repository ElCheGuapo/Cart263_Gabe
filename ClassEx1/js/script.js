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

let currentTurn = 1;

let button;

let winWidth = (size*3)+(topX+topY);
let winHeight = (size*3)+(topX+topY);

//1 = X 2 = O

let myArray = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
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

    textSize(35);
    textAlign(CENTER);

    fill(50);

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

function checkForWin() {
    let win = false;
    for(var i = 0; i < 3; i ++) {
        if(myArray[i][0] === myArray[i][1] && myArray[i][1] === myArray[i][2] && myArray[i][0] != " ") {
            win = true;
        } else if (myArray[0][i] === myArray[1][i] && myArray[1][i] === myArray[2][i] && myArray[0][i] != " ") {
            win = true;
        } else if (myArray[0][0] === myArray[1][1] && myArray[1][1] === myArray[2][2] && myArray[0][0] != " ") {
            win = true;
        } else if (myArray[0][2] === myArray[1][1] && myArray[1][1] === myArray[2][0] && myArray[0][2] != " ") {
            win = true;
        }
    }
    if(win) {
        console.log("winner!"); 
        myArray = [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "]
        ];
        win = false;
    }
}

function mousePressed() {
    checkForWin();
    if (mouseX >= topX && mouseX <= topX+size) {
        if(mouseY >= topY && mouseY <= topY+size){
            console.log("1");

            if(currentTurn == 1) {
                myArray[0][0] = "X";
                currentTurn = 2;
            } else {
                myArray[0][0] = "O";
                currentTurn = 1;
            }

        } else if(mouseY >= topY+size && mouseY <= topY+size*2){
            console.log("4");

            if(currentTurn == 1) {
                myArray[1][0] = "X";
                currentTurn = 2;
            } else {
                myArray[1][0] = "O";
                currentTurn = 1;
            }

        } else if(mouseY >= topY+size*2 && mouseY <= topY+size*3){
            console.log("7");

            if(currentTurn == 1) {
                myArray[2][0] = "X";
                currentTurn = 2;
            } else {
                myArray[2][0] = "O";
                currentTurn = 1;
            }

        }

    } else if (mouseX >= topX+size && mouseX <= topX+size*2){
        if(mouseY >= topY && mouseY <= topY+size){
            console.log("2");

            if(currentTurn == 1) {
                myArray[0][1] = "X";
                currentTurn = 2;
            } else {
                myArray[0][1] = "O";
                currentTurn = 1;
            }

        } else if(mouseY >= topY+size && mouseY <= topY+size*2){
            console.log("5");

            if(currentTurn == 1) {
                myArray[1][1] = "X";
                currentTurn = 2;
            } else {
                myArray[1][1] = "O";
                currentTurn = 1;
            }

        } else if(mouseY >= topY+size*2 && mouseY <= topY+size*3){
            console.log("8");

            if(currentTurn == 1) {
                myArray[2][1] = "X";
                currentTurn = 2;
            } else {
                myArray[2][1] = "O";
                currentTurn = 1;
            }

        }
    }
    else if (mouseX >= topX+size*2 && mouseX <= topX+size*3){
        if(mouseY >= topY && mouseY <= topY+size){
            console.log("3");

            if(currentTurn == 1) {
                myArray[0][2] = "X"; 
                currentTurn = 2;
            } else {
                myArray[0][2] = "O";
                currentTurn = 1;
            }
              
        } else if(mouseY >= topY+size && mouseY <= topY+size*2){
            console.log("6");

            if(currentTurn == 1) {
                myArray[1][2] = "X"; 
                currentTurn = 2;
            } else {
                myArray[1][2] = "O";
                currentTurn = 1;
            }

        } else if(mouseY >= topY+size*2 && mouseY <= topY+size*3){
            console.log("9");

            if(currentTurn == 1) {
                myArray[2][2] = "X"; 
                currentTurn = 2;
            } else {
                myArray[2][2] = "O";
                currentTurn = 1;
            }
        }
    }
}
/**
Description of draw()
*/
function draw() {
    drawBoard();
}