const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');

init();

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of this project?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'Please input your description for this project.',
                name: 'description'
            },
            {
                type: 'input',
                message: 'How do you install this program',
                name: 'installation'
            },
            {
                type: 'input',
                message: 'What is this program for?',
                name: 'usage'
            },
            {
                type: 'input',
                message: 'How can people contribute?',
                name: 'contributing'
            },
            {
                type: 'input',
                message: 'How should a user test your program?',
                name: 'tests'
            },
            {
                type: 'list',
                message: 'Which license works best for your project?',
                choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'none'],
                name: 'license'
            },
            {
                type: 'input',
                message: 'What\s your GitHub username?',
                name: 'githubID'
            },
            {
                type: 'input',
                message: 'What email address can users best reach you at?',
                name: 'email'
            },
            {
                type: 'input',
                message: 'What instructions would you like to leave users on how to reach out to you?',
                name: 'questions'
            }
        ]).then(function (answers) {
            const queryUrl = `https://api.github.com/users/${answers.githubID}`;
            const titleInput = answers.title;
            const descrInput = answers.description;
            const installInput = answers.installation;
            const usageInput = answers.usage;
            const licInput = answers.license;
            const contInput = answers.contributing;
            const testInput = answers.tests;
            const questInstr = answers.questions;
            const userEmail = answers.email;            
            axios
                .get(queryUrl)
                .then(function (res) {
                    const githubURL = res.data.html_url;
                    const mdTemplate = `
# ${titleInput}
            
## Description

${descrInput}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${installInput}

## Usage

${usageInput}

## License

${licInput}

## Contributing

${contInput}

## Tests

${testInput}

## Questions

${questInstr}

![${answers.githubID}(${githubURL})

${userEmail}

`; 
                    fs.writeFile('README.md', mdTemplate, 'utf8', (err) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log('\n README generated succesfully');
                    });
                    console.log(githubURL);
                });
        });
}    