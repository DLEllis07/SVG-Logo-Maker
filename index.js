const inquirer = require('inquirer');
const fs = require('fs');
const {square, circle, triangle} = require("./lib/shapes.js");

const userQuestions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter your text up to 3 characters',

    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Select a color for the text',

    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select one of the three shapes',
        choices: [circle, square, triangle],

    },
    {
        type: 'input',
        name: 'ShapeColor',
        message: 'Please select a color for your shape',

    }
]