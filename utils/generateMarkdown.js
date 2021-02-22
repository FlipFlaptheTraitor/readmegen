// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.titleInput}
    
  # Description 
  ${data.descriptionInput}
  ## Table of Contents
  * [Installation](#installation)
 * [Usage](#usage)
 * [Credits](#credits)
 * [License](#license)
 * [Badges](#badges)
 * [Features](#features)
 * [Contributing](#contributing)
 * [Tests](#tests)

 ## Installation
 ${data.installationInput}
 ### Usage 
 ${data.usageInput}
 ### Credits
 ${data.creditInput}
 ### License
 ${data.licenseInput}
 ### Badges
 ${data.licenseInput} [![${data.licenseInput} license](https://img.shields.io/badge/License-${data.licenseInput}-blue.svg)](http://perso.crans.org/besson/LICENSE.html)
 ### Features
 ${data.featureInput}
 ### Contributing  
 All questions about the project can be answer by reaching out @:
 [link to GitHub](https://github.com/${data.GitInput})
 ${data.emailInput}
 ${data.contributeInput}
 ### Tests
 ${data.testInput} 
  
`;
}
module.exports = generateMarkdown;
