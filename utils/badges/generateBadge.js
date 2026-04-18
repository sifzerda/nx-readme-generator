// badges/generateBadge.js
export function generateBadge({ name, logo, color, logoColor = "white" }) {
  return `![${name}](https://img.shields.io/badge/${encodeURIComponent(
    name
  )}-${color}?style=for-the-badge&logo=${logo}&logoColor=${logoColor})`;
}