"use client";

import { generateMarkdown } from "../../../utils/generateMarkdown";

export default function ReadmePreview({ data }) {
  if (!data) {
    return <p className="text-gray-400">Start filling the form...</p>;
  }

  const markdown = generateMarkdown(data);

  return (
    <pre className="whitespace-pre-wrap text-sm text-gray-100 leading-relaxed">
      {markdown}
    </pre>
  );
}