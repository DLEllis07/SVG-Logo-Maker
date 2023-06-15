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

class RenderLogo {
    constructor () {
        this.userText = ""
        this.userShape = ""
    };
    render () {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.userShape}${this.userText}</svg>`
    };

    setText(text, color){
        this.userText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    };

    setShape(shape){
        this.userShape = shape.render();
    };
};

const writeSVG = (fileName, data) => {
    fs.writeFile(fileName, data, function (err) {
      if (err) {
        console.log(err);
      }
      console.log(`${fileName} has been created`);
    })
  }

async function init(){
    let svgFile = "logo.svg";
    let svgRender = "";

    const answers = await inquirer.prompt(userQuestions);

    let userText = ""
    if (answers.text.length < 4 && answers.text.length > 0){
        userText = answers.text;
    } else {
        console.log("Text must be between 1 and 3 characters");
        return;
    }

    let userTextColor = answers.textColor;

    let userShape = answers.shape;

    let userShapeColor = answers.shapeColor;

    let shapeChoice;

    if (userShape === "Circle") {
        shapeChoice = new Circle();
      }
      else if (userShape === "Triangle") {
        shapeChoice = new Triangle();
      }
      else if (userShape === "Square") {
        shapeChoice = new Square();
      }
      else {
        return null;
      };

    const newSvg = new RenderLogo();
    newSvg.setText(userText, userTextColor);
    newSvg.setShape(shapeChoice, userShapeColor)

    svgRender = newSvg.render();

    writeSVG(svgFile,svgRender);
}

init();   
