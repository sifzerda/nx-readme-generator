// utils/generateMarkdown.js

import { BADGE_GROUPS} from "../utils/badges";
import { generateBadge } from "./badges/generateBadge";

export function generateMarkdown(data) {
const allBadges = Object.values(BADGE_GROUPS).flatMap(
  (group) => group.items
);

const badgeString = allBadges
  .filter((b) => data.badges?.includes(b.name))
  .map((b) => generateBadge(b))
  .join(" ");
  
  return `# ${data.title || "Untitled Project"}

${
  badgeString
    ? `## Badges
${badgeString}`
    : ""
}

## Description
${data.description || ""}

## Visuals

## Installation

\`\`\`bash
${data.installation || ""}
\`\`\`

## Usage
${data.usage || ""}

${
  data.techs.length
    ? `## Tech
${data.techs.map((f) => `- ${f}`).join("\n")}`
    : ""
}

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

## Authors and Acknowledgement
Any contributions you make are greatly appreciated. 

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". 
1.	Fork the Project
2.	Create your Feature Branch (git checkout -b feature/NewFeature)
3.	Commit your Changes (git commit -m 'Add some NewFeature')
4.	Push to the Branch (git push origin feature/NewFeature)
5.	Open a Pull Request

Contributors can also help provide writing tips or techniques, or anything not covered. Email me with writing tips and I will add these to the site, and attribute to you. You can also sign up for a user account and leave your feedback as comments.

${
  data.authors.length
    ? `## Contributors
${data.authors.map((f) => `- ${f}`).join("\n")}`
    : ""
}

${
  data.sections.support
    ? `## Support
For support, users can contact me at ${data.supportContact || "[add contact method]"}.`
    : ""
}

${
  data.developments.length
    ? `## Future Development
${data.developments.map((f) => `- ${f}`).join("\n")}`
    : ""
}
`;
}
