"use client";
import { useState } from "react";

export default function ReadmeForm({ onGenerate }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    installation: "",
    usage: "",
    license: "MIT",
    author: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded shadow-md"
    >
      <input
        name="title"
        placeholder="Project Title"
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />
      <textarea
        name="installation"
        placeholder="Installation Instructions"
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />
      <textarea
        name="usage"
        placeholder="Usage"
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />
      <input
        name="author"
        placeholder="Author"
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />
      <select
        name="license"
        onChange={handleChange}
        className="border p-2 w-full rounded"
      >
        <option value="MIT">MIT</option>
        <option value="GPL-3.0">GPL-3.0</option>
        <option value="Apache-2.0">Apache-2.0</option>
      </select>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Generate README
      </button>
    </form>
  );
}