const { Circle, Square, Triangle } = require('./shapes');
const svgOpen = "<svg width=\"300\" height=\"200\" viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\">";
const svgClose = "</svg>";

function checkColorType (suppliedColor) {
    const hexRegex = /^[a-fA-F0-9]{6}$|^[a-fA-F0-9]{3}$/;
    if (hexRegex.test(suppliedColor)) {
        hexColor = "#" + suppliedColor;
        return hexColor;
    }
    return suppliedColor;
}

function renderTitle (x,y,titleColor,title) {
    let formattedTitle = `
        <text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" font-size="48" fill="${titleColor}">${title.toUpperCase()}</text>
    `;
    return formattedTitle;
}

function generateCircle (title,titleColor,shapeColor) {
    let cir = new Circle(), circleSvg;
    cir.setColor(checkColorType(shapeColor));
    circleSvg = `
        ${svgOpen}
            ${cir.render()}
            ${renderTitle(150,100,titleColor,title)}
        ${svgClose}
    `;
    return circleSvg;
}

function generateSquare (title,titleColor,shapeColor) {
    let squ = new Square(), squareSvg;
    squ.setColor(checkColorType(shapeColor));
    squareSvg = `
        ${svgOpen}
            ${squ.render()}
            ${renderTitle(150,125,titleColor,title)}
        ${svgClose}
    `;
    return squareSvg;
}

function generateTriangle (title,titleColor,shapeColor) {
    let tri = new Triangle(), triangleSvg;
    tri.setColor(checkColorType(shapeColor));
    triangleSvg = `
        ${svgOpen}
            ${tri.render()}
            ${renderTitle(150,125,titleColor,title)}
        ${svgClose}
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
  