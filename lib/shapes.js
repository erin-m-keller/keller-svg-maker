/**
 * @Circle
 * A class that creates a line of SVG
 * code to generate a circle. Has a method
 * to update the color of the shape.
 */
class Circle {
    // initialize object instance of class
    constructor(color) {
        this.color = color;
    }
    // method to set the color based on user input
    setColor (val) {
        this.color = val;
    }
    // render method returns the SVG circle with color applied
    render () {
        const circleSvg = `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
        return circleSvg;
    }
};

/**
 * @Square
 * A class that creates a line of SVG
 * code to generate a square. Has a method
 * to update the color of the shape.
 */
class Square {
    // initialize object instance of class
    constructor(color) {
        this.color = color;
    }
    // method to set the color based on user input
    setColor (val) {
        this.color = val;
    }
    // render method returns the SVG square with color applied
    render () {
        const squareSvg = `<rect x="50" y="50" width="200" height="200" fill="${this.color}"/>`;
        return squareSvg;
    }
};

/**
 * @Triangle
 * A class that creates a line of SVG
 * code to generate a triangle. Has a method
 * to update the color of the shape.
 */
class Triangle {
    // initialize object instance of class
    constructor(color) {
        this.color = color;
    }
    // method to set the color based on user input
    setColor (val) {
        this.color = val;
    }
    // render method returns the SVG triangle with color applied
    render () {
        const triangleSvg = `<polygon points="0,200 150,0 300,200" fill="${this.color}"/>`;
        return triangleSvg;
    }
};

// export the classes
module.exports = {
    Circle : Circle,
    Square : Square,
    Triangle : Triangle
}