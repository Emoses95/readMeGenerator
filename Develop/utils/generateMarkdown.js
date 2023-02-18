// function returns badge
function renderLicenseBadge(license) {
  if(license){
    return `![badmath](https://img.shields.io/badge/license-${license}-blue.svg)`
    return ''
  }
}

//  a function that returns the license link
function renderLicenseLink(license) {
  if(license){
    return '-[licenses](#licenses)'
  }else{
    return ''
  }
}

// a function that returns the license section of README
function renderLicenseSection(license) {
  if(license){
    return' ##license: '
  }else{
    return''
  }
}

// a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
   ${renderLicenseBadge(data.license)}
## description:
   ${data.description}
  
  # Table of Content

  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  ${renderLicenseLink(data.license)}
  -[contribution](#contribution)
  -[test](#test)
  -[github](#github)
  -[email](#email)

  ## installation:
    ${data.install}

   ## usage:
    ${data.usage}

  ${renderLicenseSection(data.license)}
    ${data.license}

  ## contribution:
  ${data.contribution}

   ## tests:
  ${data.test}

   ## contact:
  - github: ${data.github}
  - email: ${data.email}


 
  

 
 
`;
}

module.exports = generateMarkdown;
