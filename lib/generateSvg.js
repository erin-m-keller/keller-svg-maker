const { Circle, Square, Triangle } = require('./shapes');

function checkColorType (suppliedColor) {
    const hexRegex = /^[a-fA-F0-9]{6}$|^[a-fA-F0-9]{3}$/;
    if (hexRegex.test(suppliedColor)) {
        hexColor = "#" + suppliedColor;
        return hexColor;
    }
    return suppliedColor;
}

function generateCircle (title,titleColor,shapeColor) {
    let cir = new Circle(), circleSvg;
    cir.setColor(checkColorType(shapeColor));
    circleSvg = `
        <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            ${cir.render()}
            <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" font-size="48" fill="${titleColor}">${title}</text>
        </svg>
    `;
    return circleSvg;
}

function generateSquare (title,titleColor,shapeColor) {
    let squ = new Square(), squareSvg;
    squ.setColor(checkColorType(shapeColor));
    squareSvg = `
        <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="200" height="200" fill="${shapeColor}"/>
            <text x="150" y="125" text-anchor="middle" dominant-baseline="middle" font-size="48" fill="${titleColor}">${title}</text>
        </svg>
    `;
    return squareSvg;
}

function generateTriangle (title,titleColor,shapeColor) {
    let tri = new Triangle(), triangleSvg;
    tri.setColor(checkColorType(shapeColor));
    triangleSvg = `
        <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,200 150,0 300,200" fill="${shapeColor}"/>
            <text x="150" y="100" text-anchor="middle" dominant-baseline="middle" font-size="48" fill="${titleColor}">${title}</text>
        </svg>
    `;
    return triangleSvg;
}

const generateSvg = data => {
    if (data.shape === 'circle') {
        return generateCircle(data.title,data.titleColor,data.shapeColor);
    } else if (data.shape === 'square') {
        return generateSquare(data.title,data.titleColor,data.shapeColor);
    } else if (data.shape === 'triangle') {
        return generateTriangle(data.title,data.titleColor,data.shapeColor);
    }
};
  
module.exports = generateSvg;
  