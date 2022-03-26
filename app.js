// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const promptQuestions = () => {
    return inquirer
        .prompt([

        // github username
        {
            type: "input",
            name: "username",
            message: "Please enter your Github username (Required)",
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log("Please enter your Github username!");
                    return false;
                }
            }
        },

        // confirm email
        {
            type: "confirm",
            name: "confirmEmail",
            message: "Would you like to provide your email?",
            default: true
        },

        // active when confirmEmail returns true
        {
            type: "input",
            name: "email",
            message: "Please provde your email",
            when: ({confirmEmail}) => {
                if (confirmEmail)     {
                    return true;
                } else {
                    console.log("Please provide your email!");
                    return false;
                }
            }
        },

        // project name
        {
            type: "input",
            name: "title",
            message: "What is the title of your project? (Required)",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter the name of your project!");
                    return false;
                }
            }
        },

        // description
        {
            type: "input",
            name: "description",
            message: "Please provide a description of your project (Required)",
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log("Please provide a description for your project!");
                    return false;
                }
            }
        },

        // purpose
        {
            type: "input",
            name: "purpose",
            message: "What is the purpose of this project? (Required)",
            validate: purposeInput => {
                if (purposeInput) {
                    return true;
                } else {
                    console.log("Please provide a reason for the project!");
                    return false
                }
            }
        },

        // programming languages
        {
            type: "checkbox",
            name: "languages",
            message: "What did you use to build this project? (Check all that apply; Required)",
            choices: ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "ES6", "Node.js"],
            validate: languageInput => {
                if (languageInput) {
                    return true;
                } else {
                    console.log("Please provide at least one selection!");
                    return false;
                }
            }
        },

        // confirm screenshot
        {
            type: "confirm",
            name: "confirmScreenshot",
            message: "Would you like to provide a link to a screenshot?",
            default: true
        },

        // active when confirmScreenshot returns true
        {
            type: "link",
            name: "screenshot",
            message: "Please provide a link to a screenshot showing your project",
            when: ({confirmScreenshot}) => {
                if (confirmScreenshot) {
                    return true;
                } else {
                    console.log("Please provide a link to your screenshot!");
                    return false;
                }
            }
        },

        // license
        {
            type: "checkbox",
            name: "license",
            message: "Please choose a license for this project (Required)",
            choices: ["AFL", "Apache", "BSL", "CC", "ECL", "GPL", "MIT", "MS", "OLS", "None"],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log("Please choose a valid license!");
                    return false;
                }
            }
        },

        // contributions
        {
            type: "input",
            name: "contributions",
            message: "Please provide any contributions/credits (Required)",
            validate: contInput => {
                if (contInput) {
                    return true;
                } else {
                    console.log("Please provide any contributions your project has, if any. If there is none please reply 'None'");
                    return false;
                }
            }
        },
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        } else {
            console.log("Success! README genereated!");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    promptQuestions()
    .then(data => {
        writeToFile("./dist/NEWREADME.md", generateMarkdown(data));
    })
    .catch(err => {
        console.log(err);
    });
}

// Function call to initialize app
init();