// TODO: Include packages needed for this application
const inquireer = require('inquirer') ;
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message="What is your project title",
        validate: (titleInput)=>{
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a name')
                return false;
            }
        }
    },
    {
        type:'input',
        message="Enter a description of your project",
        validate:(descriptionInput) =>{
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your projects');
                return false;
            }
        }
    },
    {
        type:'input',
        message="Enter a description of how to install your project",
        validate:(installationInput) =>{
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter a description of your projects installation');
                return false;
            }
        }
    },
    {
        type:'input',
        message="Enter a description of how your project is to be used",
        validate:(usageInput) =>{
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter a description of your projects is to be used');
                return false;
            }
        }
    },
    {
        type:'input',
        message="Enter any credits you would like to add to your project ",
        validate:(usageInput) =>{
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter any credits you would like to add to your project');
                return false;
            }
        }
    },
    {
        type:'input',
        message="Enter any credits you would like to add to your project ",
        validate:(usageInput) =>{
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter any credits you would like to add to your project');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'licenseInput',
        message: 'Choose a licences for your project',
        choices: ['MIT', 'GPL', 'Apache', 'N/A'],
        validate:(licenseInput) =>{
            if (licenseInput) {
                return true;
            } else {
                console.log('Please choose a license');
                return false;
            }
        }
      },
      //Badging
      {
        type:'input',
        message="Enter the features of your project ",
        validate:(featureInput) =>{
            if (featureInput) {
                return true;
            } else {
                console.log('Please enter your projects features');
                return false;
            }
        }
    },
    {
        type:'input',
        message="Enter your GitHub username ",
        validate:(GitInput) =>{
            if (GitInput) {
                return true;
            } else {
                console.log('Please enter your GitHub Username');
                return false;
            }
        }
    },
    {
        type:'input',
        message="Enter your Email address ",
        validate:(emailInput) =>{
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your Email address');
                return false;
            }
        }
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();