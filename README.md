  # SVG Logo Maker
  
  ## Description 
  This application was created with [Node.js](https://nodejs.org/en), [Node.js File System Module](https://www.w3schools.com/nodejs/nodejs_filesystem.asp), [Inquirer](https://www.npmjs.com/package/inquirer), and [Jest](https://jestjs.io/). The application generates an SVG file based on user input.
  
  ## Table of Contents
  * [Technology Stack](#technology-stack)
  * [User Story](#user-story)
  * [Acceptance Criteria](#acceptance-criteria)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Generated File Examples](#generated-file-examples)
  * [License](#license)
  * [Contributors](#contributors)
  * [Outside Resources](#outside-resources)
  * [Questions](#questions)

  ## Technology Stack

  ![javaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![nodeJs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

  ## User Story
  ```md
  AS a freelance web developer
  I WANT to generate a simple logo for my projects
  SO THAT I don't have to pay a graphic designer
  ```

  ## Acceptance Criteria
  ```md
  GIVEN a command-line application that accepts user input
  WHEN I am prompted for text
  THEN I can enter up to three characters
  WHEN I am prompted for the text color
  THEN I can enter a color keyword (OR a hexadecimal number)
  WHEN I am prompted for a shape
  THEN I am presented with a list of shapes to choose from: circle, triangle, and square
  WHEN I am prompted for the shape's color
  THEN I can enter a color keyword (OR a hexadecimal number)
  WHEN I have entered input for all the prompts
  THEN an SVG file is created named `logo.svg`
  AND the output text "Generated logo.svg" is printed in the command line
  WHEN I open the `logo.svg` file in a browser
  THEN I am shown a 300x200 pixel image that matches the criteria I entered
  ```
  
  ## Installation 
  * Ensure you are running Node.js v16.  
  * Clone the repository.
  ```
    git clone git@github.com:erin-m-keller/keller-svg-maker.git
  ```
  * Install the dependencies.
  ```bash
    npm i
  ```
  * Start the application.
  ```md
    node index.js OR npm start
  ```
  > Answer the prompts to generate an SVG file.
  
  ## Usage
  
  https://user-images.githubusercontent.com/2955501/228401999-54a5c330-e89e-4480-9376-84674d69106e.mp4
  
  > Click play to watch the video. Enjoy the music!

  ## Tests 
  * Ensure you have installed the application.
  * Run the test.
  ```
    npm test
  ```
  * Expected output.
    ![Test Result](./assets/images/expected-result.png)  

  ## Generated File Examples
  
  ![Circle SVG Example](./examples/circle.svg)  
  ![Square SVG Example](./examples/square.svg)  
  ![Triangle SVG Example](./examples/triangle.svg)
  
  ## License 
  [![MIT license](https://img.shields.io/badge/License-MIT-purple.svg)](https://lbesson.mit-license.org/)
  
  ## Contributors 
  [Erin Keller](https://github.com/erin-m-keller)

  ## Outside Resources

  * [ChatGPT](https://openai.com/blog/chatgpt): Used ChatGPT to generate the regex used within the application.
  
  ## Questions
  If you have any questions about this project, please contact me directly at [aestheticartist@gmail.com](aestheticartist@gmail.com).  
  You can view more of my projects [here](https://github.com/erin-m-keller).
  
