// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  // email validation
  let emailValidation = "";
  if (data.confirmEmail) {
    emailValidation = `- Email: ${data.email}`;
  }

  // screenshot validation
  let screenshotValidation = "";
  if (data.confirmScreenshot) {
    screenshotValidation = `![alt text](${data.screenshot})`
  }

  // generate readme
  return `# ${data.title}

  ## Table of Contents 
  - [Description](#description)
  - [Purpose](#purpose)
  - [Built With](#built-with)
  - [License](#license)
  - [Contribution](#contribution)
  - [Contact Info](#contact-info)

  ## Description

  ${data.description}

  ## Purpose

  ${data.purpose}

  ${screenshotValidation}

  ## Built With

  ${data.languages}

  ## License

  [![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)

  ## Contribution

  ${data.contributions}

  ## Contact Info:
  
  - Github: [${data.username}](https://github.com/${data.username})
  ${emailValidation}`;
}

module.exports = generateMarkdown;