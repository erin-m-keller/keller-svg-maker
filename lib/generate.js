// initialize global variables
const { Circle, Square, Triangle } = require('./shapes');
const svgOpen = "<svg width=\"300\" height=\"200\" viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\">";
const svgClose = "</svg>";

/**
 * @checkColorType
 * Checks if the color is a keyword
 * or hexidecimal. If hexadecimal, it
 * appends # to the beginning of the string
 * and returns. If a keyword, it just returns
 * the input
 */
function checkColorType (suppliedColor) {
    // initialize variables
    const hexRegex = /^[a-fA-F0-9]{6}$|^[a-fA-F0-9]{3}$/;
    // if suppliedColor is hexadecimal, append # and return
    if (hexRegex.test(suppliedColor)) {
        hexColor = "#" + suppliedColor;
        return hexColor;
    }
    // else return input
    return suppliedColor;
}

/**
 * @renderTitle
 * Function accepts x, y, titleColor, and title.
 * It builds the string with these parameters and
 * returns the data
 */
function renderTitle (x,y,titleColor,title) {
    // initialize variables
    let formattedTitle = `
        <text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" font-size="48" fill="${titleColor}">${title.toUpperCase()}</text>
    `;
    // return formatted string
    return formattedTitle;
}

/**
 * @generateShape
 * Function accepts shape, title, titleColor, and shapeColor.
 * It builds the SVG with all of the input parameters
 * and returns a string.
 */
function generateShape (shape,title,titleColor,shapeColor) {
    // initialize variables
    let selectedShape, selectedShapeX, selectedShapeY, shapeSvg;
    // if circle, call the Circle class to instantiate a new object
    if (shape === 'circle') {
        selectedShape = new Circle();
        selectedShapeX = "150";
        selectedShapeY = "100";
    } 
    // if square, call the Square class to instantiate a new object
    else if (shape === 'square') {
        selectedShape = new Square();
        selectedShapeX = "150";
        selectedShapeY = "125";
    } 
    // if triangle, call the Triangle class to instantiate a new object
    else if (shape === 'triangle') {
        selectedShape = new Triangle();
        selectedShapeX = "150";
        selectedShapeY = "125";
    }
    // call the setColor method to set the color of the shape
    selectedShape.setColor(checkColorType(shapeColor));
    // set the SVG string
    shapeSvg = `
        ${svgOpen}
            ${selectedShape.render()}
            ${renderTitle(selectedShapeX,selectedShapeY,titleColor,title)}
        ${svgClose}
    `;
    // return the SVG string
    return shapeSvg;
}

/**
 * @generateSvg
 * Function calls the appropriate function
 * to generate the SVG
 */
const generateSvg = data => {
    // if circle, generate the circle SVG with the supplied colors and title
    if (data.shape === 'circle') {
        return generateShape('circle',data.title,data.titleColor,data.shapeColor);
    } 
    // if square, generate the square SVG with the supplied colors and title
    else if (data.shape === 'square') {
        return generateShape('square',data.title,data.titleColor,data.shapeColor);
    } 
    // if triangle, generate the triangle SVG with the supplied colors and title
    else if (data.shape === 'triangle') {
        return generateShape('triangle',data.title,data.titleColor,data.shapeColor);
    }
};

// export the module
module.exports = generateSvg;
  