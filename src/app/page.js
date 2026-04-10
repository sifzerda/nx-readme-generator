"use client";

import { useState } from "react";
import ReadmeForm from "./components/ReadmeForm";
import ReadmePreview from "./components/ReadmePreview";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    installation: "",
    usage: "",
    techs: [],
    features: [],
    status: "incomplete",
    license: "MIT",
    authors: [],
    sections: {
      support: false,
      development: false,
    },
    supportContact: "",
    developments: [],
  });

  return (
    <div className="min-h-screen bg-gray-100 text-black py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">
        README Generator
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* LEFT - FORM */}
        <div className="bg-white p-6 rounded-xl shadow">
          <ReadmeForm formData={formData} setFormData={setFormData} />
        </div>

        {/* RIGHT - PREVIEW */}
        <div className="bg-black p-6 rounded-xl shadow overflow-auto max-h-[80vh]">
          <ReadmePreview data={formData} />
        </div>

      </div>
    </div>
  );
}