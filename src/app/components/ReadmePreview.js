"use client";
import ReactMarkdown from "react-markdown";

export default function ReadmePreview({ data }) {
  if (!data) {
    return (
      <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-6 text-gray-500 font-mono min-h-[500px]">
        <h1 className="text-3xl font-bold text-white mb-6">
          # Your Project Title
        </h1>

        <h2 className="text-xl text-blue-400 font-semibold mb-2">
          ## Description
        </h2>
        <p className="mb-6">
          Your project description will appear here...
        </p>

        <h2 className="text-xl text-blue-400 font-semibold mb-2">
          ## Installation
        </h2>
        <pre className="bg-black border border-gray-700 rounded-md p-3 text-green-400 overflow-x-auto mb-6">
          npm install
        </pre>

        <h2 className="text-xl text-blue-400 font-semibold mb-2">
          ## Usage
        </h2>
        <p className="mb-6">
          Instructions on how to use your project will appear here...
        </p>

        <h2 className="text-xl text-blue-400 font-semibold mb-2">
          ## License
        </h2>
        <p className="mb-6">MIT</p>

        <h2 className="text-xl text-blue-400 font-semibold mb-2">
          ## Author
        </h2>
        <p>Your name</p>
      </div>
    );
  }

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
    <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-6 text-gray-200 font-mono min-h-[500px] overflow-auto">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-white border-b border-gray-700 pb-3 mb-6">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl text-blue-400 font-semibold mt-6 mb-3">
              {children}
            </h2>
          ),
          p: ({ children }) => (
            <p className="text-gray-300 leading-7 mb-4">{children}</p>
          ),
          code: ({ children }) => (
            <code className="bg-black text-green-400 px-2 py-1 rounded">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-black border border-gray-700 rounded-md p-4 overflow-x-auto text-green-400 mb-4">
              {children}
            </pre>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-6 mb-4 text-gray-300">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6 mb-4 text-gray-300">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="mb-1">{children}</li>,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}