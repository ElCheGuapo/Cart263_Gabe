/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let spacing = 40;
let topX = 150;
let topY = 150;
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
    createCanvas(500, 500);
    background(0, 255, 0);
    let donkey = "DONKEY";
    myArray.push(donkey);
    myArray.push("PENIS");
}


/**
Description of draw()
*/
function draw() {
    //line 1
    text(myArray[0][0], topX, topY);
    text(myArray[0][1], topX + spacing, topY);
    text(myArray[0][2], topX + spacing*2, topY);

    //line 2
    text(myArray[1][0], topX, topY+ spacing);
    text(myArray[1][1], topX + spacing, topY+ spacing);
    text(myArray[1][2], topX + spacing*2,topY+ spacing);
    
    //line 3
    text(myArray[2][0], topX, topY+ spacing*2);
    text(myArray[2][1], topX + spacing, topY+ spacing*2);
    text(myArray[2][2], topX + spacing*2,topY+ spacing*2);
    

}