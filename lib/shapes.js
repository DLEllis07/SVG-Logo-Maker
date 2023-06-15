class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
    
    setColor(color) {
        this.shapeColor = color;
    }

}

class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    }

    render() {
        return `<circle cx="150" cy="100" r="80" height="100%" width="100%" fill="${this.shapeColor}"/> `
    }
}

class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    }

    render() {
        return `<rect x="50" width="200" height="200" fill="${this.shapeColor}"/>`
    }

}

class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        }
    
        render() {
            return `<polygon points="0, 200 300,200 150, 0" fill="${this.shapeColor}"/>`
    }
}

module.exports = {Shapes, Circle, Square, Triangle}