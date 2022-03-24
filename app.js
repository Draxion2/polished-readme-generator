// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    title = {
        type: "input",
        name: "title",
        message: "What is the title of your project? (Required)?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter the name of your project!");
                return false;
            }
        }
    },
    desc = {
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
    purpose = {
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
    langauges = {
        type: "checkbox",
        name: "languages",
        message: "What did you build this project with? (Check all that apply)",
        choices: ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "ES6", "Node.js"]
    },
    confirmScreenshot = {
        type: "confirm",
        name: "confirmScreenshot",
        message: "Would you like to provide a link to a screenshot?",
        default: true
    },
    screenshot = {
        type: "link",
        name: "screenshot",
        message: "Please provide a screenshot showing your project",
        when: ({confirmScreenshot}) => {
            if (confirmScreenshot) {
                return true;
            } else {
                return false;
            }
        }
    },
    license = {
        type: "input",
        name: "license",
        message: "Does your project have a license?",
        default: true
    },
    contributions = {
        type: "input",
        name: "contributions",
        message: "Please provide any contributions (Required)",
        validate: contInput => {
            if (contInput) {
                return true;
            } else {
                console.log("Please provide any contributions your project has, if any. If there is none please input 'None'");
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer
    .prompt(questions);
}

// Function call to initialize app
init();