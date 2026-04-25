// badges/generateBadge.js

export function getBadgeUrl({ name, logo, color, logoColor = "white" }) {
  return `https://img.shields.io/badge/${encodeURIComponent(
    name
  )}-${color}?style=for-the-badge&logo=${logo}&logoColor=${logoColor}`;
}

export function generateBadge(option) {
  return `![${option.name}](${getBadgeUrl(option)})`;
}