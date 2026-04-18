import { BADGE_GROUPS, BADGE_GROUP_ORDER } from "../../../utils/badges";
import { generateBadge } from "../../../utils/badges/generateBadge";

BADGE_GROUP_ORDER.map((groupKey) => {
  const group = BADGE_GROUPS[groupKey];

  return (
    <div key={groupKey}>
      <h3>{group.label}</h3>

      {group.items.map((item) => (
        <button key={item.value}>
          {generateBadge(item)}
        </button>
      ))}
    </div>
  );
});