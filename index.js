// TODO: Include packages needed for this application
const inquirer = require('inquirer') ;
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const util = require('util');
// TODO: Create an array of questions for user input

const questions = [
    {
        type:'input',
        message:"What is your project title",
        name:'titleInput',
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
        message:"Enter a description of your project",
        name:'descriptionInput',
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
        message:"Enter a description of how to install your project",
        name:'installationInput',
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
        message:"Enter a description of how your project is to be used",
        name:'usageInput',
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
        message:"Enter any credits you would like to add to your project ",
        name:'creditInput',
        validate:(creditInput) =>{
            if (creditInput) {
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
        message:"Enter the features of your project ",
        name:'featureInput',
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
        message:"Enter your GitHub username ",
        name:'GitInput',
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
        message:"Enter your Email address ",
        name:'emailInput',
        validate:(emailInput) =>{
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your Email address');
                return false;
            }
        }
    },
    {
        type:'input',
        message:"Enter any other contributers to the project ",
        name:'contributeInput',
        validate:(contributeInput) =>{
            if (contributeInput) {
                return true;
            } else {
                console.log('Please enter any other contributers to the project');
                return false;
            }
        }
    },
    {
        type:'input',
        message:"Enter a description of how to test your project ",
        name:'testInput',
        validate:(testInput) =>{
            if (testInput) {
                return true;
            } else {
                console.log('Please enter a description of how to test your project');
                return false;
            }
        },
    }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, eror => {
    if(eror) {
        return console.log(eror);
    }
        console.log("README has been generated")

    });
}
const writeFileAsync = util.promisify(writeToFile); 
// TODO: Create a function to initialize app
async function init() {
    try {

        const userResponses = await inquirer.prompt(questions);
     
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses);
        console.log(markdown);
    
    
        await writeFileAsync('./dist/ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
