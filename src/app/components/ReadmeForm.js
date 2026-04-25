"use client";

import { useState } from "react";
import { BADGE_GROUPS, BADGE_GROUP_ORDER } from "../../../utils/badges/index";
//import { generateBadge } from "../../../utils/badges/generateBadge";
//import { LICENSE_BADGES } from "../../../utils/licenseBadges";
import { getBadgeUrl } from "../../../utils/badges/generateBadge";
//import BadgeOrderList from "../components/BadgeOrderList";

export default function ReadmeForm({ formData, setFormData }) {
  const [badgesOpen, setBadgesOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState({});

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

      {/* BADGES */}
      <div className="border rounded">

        {/* MASTER TOGGLE */}
        <button
          type="button"
          onClick={() => setBadgesOpen((prev) => !prev)}
          className="w-full flex justify-between items-center px-3 py-2 bg-gray-200 hover:bg-gray-300"
        >
          <span className="font-semibold text-gray-800">Tech Badges</span>
          <span>{badgesOpen ? "▲" : "▼"}</span>
        </button>

        {/* MASTER CONTENT */}
        {badgesOpen && (
          <div className="p-2">

            {BADGE_GROUP_ORDER.map((groupKey) => {
              const group = BADGE_GROUPS[groupKey];
              if (!group) return null;

              const isOpen = openGroups[groupKey];

              return (
                <div key={groupKey} className="mb-2 border rounded">

                  {/* GROUP HEADER */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpenGroups((prev) => ({
                        ...prev,
                        [groupKey]: !prev[groupKey],
                      }))
                    }
                    className="w-full flex justify-between items-center px-3 py-2 bg-gray-100 hover:bg-gray-200"
                  >
                    <span className="text-sm font-semibold text-gray-700">
                      {group.label}
                    </span>
                    <span className="text-gray-500">
                      {isOpen ? "▲" : "▼"}
                    </span>
                  </button>

                  {/* GROUP CONTENT */}
                  {isOpen && (
                    <div className="p-3 flex flex-col gap-1 bg-white">
                      {group.items.map((option) => {
                        const isChecked = formData.badges.includes(option.name);

                        return (
                          <label
                            key={option.name}
                            className={`flex items-center justify-between px-3 py-2 rounded border cursor-pointer transition ${isChecked
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white text-gray-800 hover:bg-gray-100"
                              }`}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {
                                setFormData((prev) => {
                                  const exists = prev.badges.includes(option.name);

                                  return {
                                    ...prev,
                                    badges: exists
                                      ? prev.badges.filter((b) => b !== option.name)
                                      : [...prev.badges, option.name],
                                  };
                                });
                              }}
                              className="hidden"
                            />

                            {/* LEFT: NAME */}
                            <span className="font-medium">{option.name}</span>

                            {/* RIGHT: BADGE IMAGE */}
                            <img
                              src={getBadgeUrl(option)}
                              alt={option.name}
                              className="h-5"
                            />
                          </label>
                        );
                      })}
                    </div>
                  )}

                </div>
              );
            })}

          </div>
        )}
      </div>

      {/* VISUALS */}
      <textarea
        name="visuals"
        placeholder="Visuals, e.g. screenshots, demo videos -- host on github issues then upload links here"
        value={formData.visuals}
        onChange={handleChange}
        className="w-full border border-gray-300 p-2 rounded text-gray-900 bg-white placeholder-gray-400"
      />

      {/* INSTALLATION */}
      <textarea
        name="installation"
        placeholder="Installation - make 2 boxes, one for commands (bash) and one for extra dot point instructions"
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

      {/* TECH */}
      <div>
        <p className="font-semibold mb-2">Tech Used</p>

        {formData.techs.map((tech, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              value={tech}
              onChange={(e) => {
                const updated = [...formData.techs];
                updated[index] = e.target.value;

                setFormData((prev) => ({
                  ...prev,
                  techs: updated,
                }));
              }}
              className="w-full border border-gray-300 p-2 rounded text-gray-900 bg-white placeholder-gray-400"
              placeholder={`E.g. npm package`}
            />

            {/* ❌ ONLY show delete button for index > 0 */}
            {index > 0 && (
              <button
                type="button"
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    techs: prev.techs.filter((_, i) => i !== index),
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
              techs: [...prev.techs, ""],
            }))
          }
          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded">
          + Add Tech
        </button>
      </div>

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
        <option value="">Select a license</option>
        <option value="MIT">MIT</option>
        <option value="Apache 2.0">Apache 2.0</option>
        <option value="GPL v3">GPL v3</option>
        <option value="BSD 3-Clause">BSD 3-Clause</option>
        <option value="Unlicense">Unlicense</option>
      </select>

      {/* AUTHOR */}
      <div>
        <p className="font-semibold mb-2">Authors and Acknowledgement</p>

        {formData.authors.map((author, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              value={author}
              onChange={(e) => {
                const updated = [...formData.authors];
                updated[index] = e.target.value;

                setFormData((prev) => ({
                  ...prev,
                  authors: updated,
                }));
              }}
              className="w-full border border-gray-300 p-2 rounded text-gray-900 bg-white placeholder-gray-400"
              placeholder={`Author ${index + 1}`}
            />

            <button
              type="button"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  authors: prev.authors.filter((_, i) => i !== index),
                }));
              }}
              className="px-3 py-1 bg-red-600 text-white rounded"
            >
              🗑️
            </button>
          </div>
        ))}

        {/* ADD FIRST / ADD MORE BUTTON */}
        <button
          type="button"
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              authors: [...prev.authors, ""],
            }))
          }
          className="px-3 py-1 bg-blue-600 text-white rounded">
          + Add Contributor
        </button>
      </div>

      {/* OPTIONAL SECTIONS (checkboxes) */}
      <div>

        {/* support */}
        <label className="block">
          <input
            type="checkbox"
            checked={formData.sections.support}
            onChange={() => toggleSection("support")}
            className="mr-2"
          />
          Include Support Section
        </label>

        {formData.sections.support && (
          <input
            name="supportContact"
            placeholder="Support contact (email, Discord, GitHub, etc.)"
            value={formData.supportContact}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded text-gray-900 bg-white placeholder-gray-400 mt-2"
          />
        )}


        {/* Future Development development */}
        <label className="block">
          <input
            type="checkbox"
            checked={formData.sections.development}
            onChange={() => toggleSection("development")}
            className="mr-2"
          />
          Include Future Development
        </label>

        {formData.sections.development && (
          <input
            name="Future Development"
            placeholder="Add future development here"
            value={formData.development}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded text-gray-900 bg-white placeholder-gray-400 mt-2"
          />
        )}

      </div>

      <div>
        <p className="font-semibold mb-2">Future Development</p>

        {formData.developments.map((development, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              value={development}
              onChange={(e) => {
                const updated = [...formData.developments];
                updated[index] = e.target.value;

                setFormData((prev) => ({
                  ...prev,
                  developments: updated,
                }));
              }}
              className="w-full border border-gray-300 p-2 rounded text-gray-900 bg-white placeholder-gray-400"
              placeholder={`Feature ${index + 1}`}
            />

            <button
              type="button"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  developments: prev.developments.filter((_, i) => i !== index),
                }));
              }}
              className="px-3 py-1 bg-red-600 text-white rounded">
              🗑️
            </button>
          </div>
        ))}

        {/* ADD BUTTON */}
        <button
          type="button"
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              developments: [...prev.developments, ""],
            }))
          }
          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded">
          + Add Future Development
        </button>
      </div>

    </form>
  );
}

