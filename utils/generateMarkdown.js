// utils/generateMarkdown.js
export function generateMarkdown(data) {
  return `# ${data.title || "Untitled Project"}

## Description
${data.description || ""}

## Installation

\`\`\`bash
${data.installation || ""}
\`\`\`

## Usage
${data.usage || ""}

${
  data.features.length
    ? `## Features
${data.features.map((f) => `- ${f}`).join("\n")}`
    : ""
}

## Status
This project is ${data.status}.

## License
Distributed under the ${data.license} License. See LICENSE.txt for more information.

## Author
${data.author || ""}

## Contributing
Any contributions you make are greatly appreciated. 

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". 
1.	Fork the Project
2.	Create your Feature Branch (git checkout -b feature/NewFeature)
3.	Commit your Changes (git commit -m 'Add some NewFeature')
4.	Push to the Branch (git push origin feature/NewFeature)
5.	Open a Pull Request

Contributors can also help provide writing tips or techniques, or anything not covered. Email me with writing tips and I will add these to the site, and attribute to you. You can also sign up for a user account and leave your feedback as comments.

${
  data.sections.roadmap
    ? `## Roadmap
- Coming soon`
    : ""
}
`;
}