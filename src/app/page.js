"use client";

import { useState } from "react";
import ReadmeForm from "./components/ReadmeForm";
import ReadmePreview from "./components/ReadmePreview";
import DownloadButton from "./components/DownloadButton";

export default function Home() {
  const [data, setData] = useState(null);

  const generateMarkdown = (formData) => setData(formData);

  const markdownContent = data
    ? `# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Author
${data.author}`
    : "";

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          README Generator
        </h1>

        {/* Main editor + preview */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Form / Editor */}
          <div className="flex-1 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Fill in your README</h2>
            <ReadmeForm onGenerate={generateMarkdown} />
          </div>

          {/* Preview */}
          <div className="flex-1 bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200 overflow-auto max-h-[80vh]">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Preview</h2>
            <div className="prose prose-slate max-w-full">
              <ReadmePreview data={data} />
            </div>
            {data && (
              <div className="mt-6">
                <DownloadButton content={markdownContent} />
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-10 text-sm">
          Made with ❤️ using Next.js & Tailwind CSS
        </p>
      </div>
    </div>
  );
}