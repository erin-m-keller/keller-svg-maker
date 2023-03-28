let hexRegex = /^[a-fA-F0-9]{6}$|^[a-fA-F0-9]{3}$/;

function generateCircle (title,titleColor,shapeColor) {
    if (hexRegex.test(titleColor)) {
        titleColor = "#" + titleColor;
    }
    if (hexRegex.test(shapeColor)) {
        shapeColor = "#" + shapeColor;
    }
    const circleSvg = `
        <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="90" fill="${shapeColor}"/>
            <text x="150" y="100" text-anchor="middle" dominant-baseline="central" font-size="24" fill="${titleColor}">${title}</text>
        </svg>
    `;
    return circleSvg;
}

function generateSquare (title,titleColor,shapeColor) {
    if (hexRegex.test(titleColor)) {
        titleColor = "#" + titleColor;
    }
    if (hexRegex.test(shapeColor)) {
        shapeColor = "#" + shapeColor;
    }
    const squareSvg = `
        <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="200" height="100" fill="${shapeColor}"/>
            <text x="150" y="100" text-anchor="middle" dominant-baseline="central" font-size="24" fill="${titleColor}">${title}</text>
        </svg>
    `;
    return squareSvg;
}

const generateSvg = data => {
    if (data.shape === 'circle') {
        return generateCircle(data.title,data.titleColor,data.shapeColor);
    } else if (data.shape === 'square') {
        return generateSquare(data.title,data.titleColor,data.shapeColor);
    } else if (data.shape === 'triangle') {
        return generateCircle(data.title,data.titleColor,data.shapeColor);
    }
};
  
  module.exports = generateSvg;
  