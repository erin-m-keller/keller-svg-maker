const hexRegex = /^[a-fA-F0-9]{6}$|^[a-fA-F0-9]{3}$/;

class Circle {
    constructor(color) {
        this.color = color;
    }
    getColor () {
        if (hexRegex.test(this.color)) {
            shapeColor = "#" + shapeColor;
            return shapeColor;
        } else {
            return this.color;
        }
    }
    getCircle () {
        const circleSvg = `<circle cx="150" cy="100" r="80" fill="${getColor()}"/>`;
        return circleSvg;
    }
};

class Square {
    constructor(color) {
        this.color = color;
    }
    getColor () {
        if (hexRegex.test(this.color)) {
            shapeColor = "#" + shapeColor;
            return shapeColor;
        } else {
            return this.color;
        }
    }
    getSquare () {
        const squareSvg = `<rect x="50" y="50" width="200" height="200" fill="${getColor()}"/>`;
        return squareSvg;
    }
};

class Triangle {
    constructor(color) {
        this.color = color;
    }
    getColor () {
        if (hexRegex.test(this.color)) {
            shapeColor = "#" + shapeColor;
            return shapeColor;
        } else {
            return this.color;
        }
    }
    getTriangle () {
        const triangleSvg = `<polygon points="0,200 150,0 300,200" fill="${getColor()}"/>`;
        return triangleSvg;
    }
};

module.exports = {
    Circle : Circle,
    Square : Square,
    Triangle : Triangle
}