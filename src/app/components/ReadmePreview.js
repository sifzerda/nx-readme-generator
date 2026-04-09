"use client";
import ReactMarkdown from "react-markdown";

export default function ReadmePreview({ data }) {
  if (!data) return null;

  const markdown = `
# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Author
${data.author}
  `;

  return (
    <div className="bg-gray-50 p-6 rounded shadow-md mt-6 prose">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}