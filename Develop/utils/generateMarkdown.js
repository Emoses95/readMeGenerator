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
  return `# ${data.title}
    ## Description
   
    -What was your motiviation?
    -Why did you build this project?
    -what problem does it solve?
    -what did you learn?
  
    #Table of Content

    -[description](#description)
    -[installation](#installation)
    -[usage](#usage)
    -[licenses](#licenses)
    -[contribution](#contribution)
    -[test](#test)
    -[username](#username)
    -[profile](#profile)

    ##Installation

    What are the steps required to install your project?

    ##Usage

    



  

 
 
`;
}

module.exports = generateMarkdown;
