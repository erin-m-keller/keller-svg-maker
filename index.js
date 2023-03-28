// initialize variables
const fs = require('fs'),
      inquirer = require('inquirer'),
      generateSvg = require('./utils/generateSvg.js');

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter up to three characters for the logo text.',
            validate: validateCharacters // validate the input is not greater than 3
        },
        {
            type: 'input',
            name: 'titleColor',
            message: 'Please enter a color keyword or hexidecimal number for the color of the text.',
            validate: validateColor // validate the input is a color keyword or valid hexidecimal
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like to use?',
            choices: ['circle','triangle','square'],
            default: 'circle',
            validate: validateInput // validate the input is not empty
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter a color keyword or hexidecimal number for the color of the shape.',
            validate: validateColor // validate the input is a color keyword or valid hexidecimal
        }
    ])
};

const validateCharacters = async (input) => {
    if (input.length <= 3) {
        return true;
    } 
    return 'Please enter three characters or less.';
};

const validateColor = async (color) => {
    let hexRegex = /^[a-fA-F0-9]{6}$|^[a-fA-F0-9]{3}$/,
        keywordRegex = /^(aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgrey|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|grey|green|greenyellow|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgrey|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)$/i;
    if (hexRegex.test(color)) {
        return true;
    } else if (keywordRegex.test(color.toLowerCase())) {
        return true;
    }
    return 'Please enter a valid color keyword or hexidecimal number.';
};

const validateInput = async (input) => {
    if (input) {
        return true;
    } 
    return 'You must enter the information.';
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}

function init() {
    questions().then(res => {
        return generateSvg(res);
    }).then(data => {
        return writeToFile("logo.svg", data);
    }).catch(err => {
        console.log("Error: " + err)
    });
}

init();