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
        message: 'Enter a few notable features(separated by semi-colons):'
    },
    {
        // Preview image (under "Preview")
        type: 'confirm',
        name: 'includePreview',
        message: 'Would you like to include a preview image in your README?',
        default: false
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

// Function to write README file
function writeToFile(fileName, data, includePreview) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Success! A README.md file has been created.');
            if (includePreview) {
                console.log('Be sure to add a preview image to the root directory (default: preview.png).');
            }
        }
    });
}

// Function to generate markdown for README
// Title, desc., install, features, deployed, license, github, email\
function generateMarkdown(data) {

    // Split features by semi-colon and trim each feature
    const featureList = data.features.split(';').map(feature => feature.trim());

    // Convert array of features into a Markdown list
    const formattedFeatures = featureList.map(feature => `- ${feature}`).join('\n');

    // Add preview section if user chooses to include preview
    const previewSection = data.includePreview
    ? `## 📷 Preview\n![App Screenshot](./preview.png)\n`
    : '';
    const previewTOCSection = data.includePreview ? '- [Preview](#📷-preview)\n' : '';

    return `
# ${data.title}

${data.description}

## Table of Contents
- [Getting Started](#🚀-getting-started)
- [Features](#📝-features)
${previewTOCSection}- [Demo](#🌐-live-demo)
- [License](#📄-license)
- [Contact Me](#📧-contact-me)

## 🚀 Getting Started
${data.installation}

## 📝 Features
${formattedFeatures}

${data.includePreview ? '## 📷 Preview\n![App Screenshot](./preview.png)\n' : ''}

## 🌐 Live Demo
${data.deployed}

## 📄 License
This project is covered under the ${data.license} license.

## 📧 Contact Me
For any questions, please contact me at [${data.email}](mailto:${data.email}).
Find more of my work at [${data.github}](https://github.com/${data.github}).
`;
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            writeToFile('README.md', readmeContent, answers.includePreview);
        })
        .catch((error) => {
            console.error('An error occurred: ', error);
        });
}

// Function call to initialize app
init();