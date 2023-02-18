const inquirer= require('inquirer');
const generateMarkdown= require('./Develop/utils/generateMarkdown');
const fs= require('fs');

//  an array of questions for user input
inquirer
    .prompt ([
     {
        type: 'input',
        name: 'project',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter description of the project',
      },
      {
        type: 'input',
        name: 'install',
        message: 'What are the steps to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidlines',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
      },
      {
        type:'list',
        name: 'license',
        message:'Would you like to choose a license?',
        choices:["MIT",'BSD','NONE']
      }
])
.then((answers) => {
    const readMeContent = generateMarkdown(answers);

    fs.writeFile('example.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
