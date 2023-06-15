const {Circle, Square, Triangle} = require('./shapes.js');

describe('Test', () => {

  describe('Circle', () => {
    it('should return true if a circle was rendered', () => {
        const shape = new Circle();
        shape.setColor("blue");

        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" height="100%" width="100%" fill="blue"/> `);
    });
  });

  describe('Square', () => {
    it('should return true if a square was rendered', () => {
        const shape = new Square();
        shape.setColor("blue");

        expect(shape.render()).toEqual(`<rect x="50" width="200" height="200" fill="blue"/>`);
    });
  });

  describe('Triangle', () => {
    it('should return true if a triangle was rendered', () => {
        const shape = new Triangle();
        shape.setColor("blue");

        expect(shape.render()).toEqual(`<polygon points="0, 200 300,200 150, 0" fill="blue"/>`);
    });
  });

});