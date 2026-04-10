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

      {/* FEATURES */}
      <div>
        <p className="font-semibold mb-2">Features</p>

        {formData.features.map((feature, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              value={feature}
              onChange={(e) => {
                const updated = [...formData.features];
                updated[index] = e.target.value;

                setFormData((prev) => ({
                  ...prev,
                  features: updated,
                }));
              }}
              className="w-full border border-gray-300 p-2 rounded text-gray-900 bg-white placeholder-gray-400"
              placeholder={`Feature ${index + 1}`}
            />

            {/* ❌ ONLY show delete button for index > 0 */}
            {index > 0 && (
              <button
                type="button"
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    features: prev.features.filter((_, i) => i !== index),
                  }));
                }}
                className="px-3 py-1 bg-red-600 text-white rounded">
                🗑️
              </button>
            )}
          </div>
        ))}

        {/* ADD BUTTON */}
        <button
          type="button"
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              features: [...prev.features, ""],
            }))
          }
          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded">
          + Add Feature
        </button>
      </div>

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
            checked={formData.sections.roadmap}
            onChange={() => toggleSection("roadmap")}
            className="mr-2"
          />
          Include Future Development
        </label>
      </div>

    </form>
  );
}