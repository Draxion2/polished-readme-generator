// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `Title is ${data.title} and the desc is ${data.description}. The purpose is ${data.purpose}!`;
}

module.exports = generateMarkdown;