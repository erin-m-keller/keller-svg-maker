function generateCircle (title,titleColor,shapeColor) {
    let hexRegex = /^[a-fA-F0-9]{6}$|^[a-fA-F0-9]{3}$/;
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

const generateSvg = data => {
    if (data.shape === 'circle') {
        return generateCircle(data.title,data.titleColor,data.shapeColor);
    } else if (data.shape === 'square') {
        return generateCircle(data.title,data.titleColor,data.shapeColor);
    } else if (data.shape === 'triangle') {
        return generateCircle(data.title,data.titleColor,data.shapeColor);
    }
};
  
  module.exports = generateSvg;
  