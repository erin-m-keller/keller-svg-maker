const { Circle, Square, Triangle } = require('./shapes');

describe('Circle', () => {
    it('should render the circle portion of the SVG with a supplied color', () => {
        const cir = new Circle();
        cir.setColor("red");
        expect(cir.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red"/>');
    });
});

describe('Square', () => {
    it('should render the square portion of the SVG with a supplied color', () => {
        const squ = new Square();
        squ.setColor("green");
        expect(squ.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green"/>');
    });
});

describe('Triangle', () => {
    it('should render the triangle portion of the SVG with a supplied color', () => {
        const tri = new Triangle();
        tri.setColor("blue");
        expect(tri.render()).toEqual('<polygon points="0,200 150,0 300,200" fill="blue"/>');
    });
});