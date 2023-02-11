const inquirer= require('inquirer');

// TODO: Create an array of questions for user input
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
        message: 'Whar are the steps to install your project?',
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
])
.then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();