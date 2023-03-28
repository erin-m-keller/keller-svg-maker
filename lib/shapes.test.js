// import classes
const { Circle, Square, Triangle } = require('./shapes');

/**
 * @Circle
 * This test creates a new Circle object,
 * uses the setColor method to supply a color,
 * and checks whether the render method returns
 * the correct string
 */
describe('Circle', () => {
    it('should render the circle portion of the SVG with a supplied color', () => {
        // initialize object
        const cir = new Circle();
        // set color
        cir.setColor("red");
        // check render response
        expect(cir.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red"/>');
    });
});

/**
 * @Square
 * This test creates a new Square object,
 * uses the setColor method to supply a color,
 * and checks whether the render method returns
 * the correct string
 */
describe('Square', () => {
    it('should render the square portion of the SVG with a supplied color', () => {
        // initialize object
        const squ = new Square();
        // set color
        squ.setColor("green");
        // check render response
        expect(squ.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green"/>');
    });
});

/**
 * @Triangle
 * This test creates a new Triangle object,
 * uses the setColor method to supply a color,
 * and checks whether the render method returns
 * the correct string
 */
describe('Triangle', () => {
    it('should render the triangle portion of the SVG with a supplied color', () => {
        // initialize object
        const tri = new Triangle();
        // set color
        tri.setColor("blue");
        // check render response
        expect(tri.render()).toEqual('<polygon points="0,200 150,0 300,200" fill="blue"/>');
    });
});