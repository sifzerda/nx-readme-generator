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
Distributed under the ${data.license} License.

## Author
${data.author || ""}

${
  data.sections.contributing
    ? `## Contributing
Contributions are welcome.`
    : ""
}

${
  data.sections.roadmap
    ? `## Roadmap
- Coming soon`
    : ""
}
`;
}