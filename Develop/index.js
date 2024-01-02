// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    {
        // Title of project (at the top of README)
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        // Description of project (under title)
        type: 'input',
        name: 'description',
        message: 'Enter a short description of your project:'
    },
    {
        // How to install project (under "Getting Started")
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:'
    },
    {
        // Notable features (under "Features")
        type: 'input',
        name: 'features',
        message: 'Enter a few notable features:'
    },
    {
        // Live site URL (under "Live Demo")
        type: 'input',
        name: 'deployed',
        message: 'Enter deployed site URL:'
    },
    {
        // License (under "License")
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None']
    },
    {
        // GitHub username
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
    },
    {
        // Email address
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();