"use client";

export default function ReadmeForm({ formData, setFormData }) {

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleSection = (key) => {
    setFormData((prev) => ({
      ...prev,
      sections: {
        ...prev.sections,
        [key]: !prev.sections[key],
      },
    }));
  };

  return (
    <form className="space-y-4">

      {/* TITLE */}
      <input
        name="title"
        placeholder="Project Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded text-gray-900 bg-white placeholder-gray-400"
      />

      {/* DESCRIPTION */}
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded text-gray-900 bg-white placeholder-gray-400"
      />

      {/* INSTALLATION */}
      <textarea
        name="installation"
        placeholder="Installation"
        value={formData.installation}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded text-gray-900 bg-white placeholder-gray-400"
      />

      {/* USAGE */}
      <textarea
        name="usage"
        placeholder="Usage"
        value={formData.usage}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded text-gray-900 bg-white placeholder-gray-400"
      />

      {/* FEATURES (simple comma input) */}
      <input
        name="features"
        placeholder="Features (comma separated)"
        value={formData.features.join(",")}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            features: e.target.value
              .split(",")
              .map((f) => f.trim())
              .filter(Boolean),
          }))
        }
        className="w-full border border-gray-300 p-2 rounded text-gray-900 bg-white placeholder-gray-400"
      />

      {/* STATUS (radio pills) */}
      <div>
        <p className="font-semibold mb-2">Status</p>

        {["completed", "incomplete", "awaiting future development", "discontinued"].map(
          (status) => (
            <label key={status} className="block">
              <input
                type="radio"
                name="status"
                value={status}
                checked={formData.status === status}
                onChange={handleChange}
                className="mr-2"
              />
              {status}
            </label>
          )
        )}
      </div>

      {/* LICENSE */}
      <select
        name="license"
        value={formData.license}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded text-gray-900 bg-white placeholder-gray-400"
      >
        <option value="MIT">MIT</option>
        <option value="Apache 2.0">Apache 2.0</option>
        <option value="GPL">GPL</option>
      </select>

      {/* AUTHOR */}
      <input
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded text-gray-900 bg-white placeholder-gray-400"
      />

      {/* OPTIONAL SECTIONS (checkboxes) */}
      <div className="space-y-2">
        <label className="block">
          <input
            type="checkbox"
            checked={formData.sections.contributing}
            onChange={() => toggleSection("contributing")}
            className="mr-2"
          />
          Include Contributing Section
        </label>

        <label className="block">
          <input
            type="checkbox"
            checked={formData.sections.roadmap}
            onChange={() => toggleSection("roadmap")}
            className="mr-2"
          />
          Include Roadmap Section
        </label>
      </div>

    </form>
  );
}