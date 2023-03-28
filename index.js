// initialize variables
const fs = require('fs'),
      inquirer = require('inquirer'),
      generate = require('./lib/generate.js');

// Create the prompts
const userInput = () => {
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
            message: 'Please enter a color keyword or hexidecimal number (excluding #) for the color of the text.',
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
            message: 'Please enter a color keyword or hexidecimal number (excluding #) for the color of the shape.',
            validate: validateColor // validate the input is a color keyword or valid hexidecimal
        }
    ])
};

/**
 * @validateCharacters
 * Ensures the input is less than or
 * equal to three characters
 */
const validateCharacters = async (input) => {
    // if input is valid, return true
    if (input.length <= 3) {
        return true;
    } 
    // else display a message to the user
    return 'Please enter three characters or less.';
};

/**
 * @validateColor
 * Ensures the color is a valid
 * color keyword OR a valid 
 * hexidecimal number (3 or 6 characters)
 */
const validateColor = async (color) => {
    // initialize variables
    let hexRegex = /^[a-fA-F0-9]{6}$|^[a-fA-F0-9]{3}$/,
        keywordRegex = /^(aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgrey|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|grey|green|greenyellow|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgrey|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)$/i;
    // if it is a valid hexadecimal color, return true
    if (hexRegex.test(color)) {
        return true;
    } 
    // else if it is a valid color keyword, return true
    else if (keywordRegex.test(color.toLowerCase())) {
        return true;
    }
    // else display a message to the user
    return 'Please enter a valid color keyword or hexidecimal number.';
};

/**
 * @validateInput
 * Ensures the user has entered something
 */
const validateInput = async (input) => {
    // if user has entered data, return true
    if (input) {
        return true;
    } 
    // else display a message to the user
    return 'You must enter the information.';
};

/**
 * @writeToFile
 * Writes the SVG data to a file
 */
function writeToFile(fileName, data) {
    // write data to file
    fs.writeFile(fileName, data, (err) => {
        // if error, show error in console log
        if (err) {
            console.error(err);
        }
        // console log a success message 
        else {
            console.log('Generated logo.svg');
        }
    });
}

/**
 * @init
 * Runs on app load
 */
function init() {
    // get the data from the prompts
    userInput().then(res => {
        // pass the responses to the generate.js file to create the SVG
        return generate(res);
    }).then(data => {
        // pass the returned data to the @writeToFile function
        return writeToFile("logo.svg", data);
    }).catch(err => {
        // console log the error
        console.log("Error: " + err)
    });
}

// initialize the application
init();