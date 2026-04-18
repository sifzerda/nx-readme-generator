// badges/index.js
import { frameworks } from "./data/frameworks";
import { styling } from "./data/styling";
import { backend } from "./data/backend";
import { databases } from "./data/databases";

import { ai } from "./data/ai";
import { cloud } from "./data/cloud";
import { devops } from "./data/devops";
import { tools } from "./data/tools";

export const BADGE_GROUPS = {
  frameworks,
  styling,
  backend,
  databases,
  ai,
  cloud,
  devops,
  tools,
};

export const BADGE_GROUP_ORDER = [
  "frameworks",
  "styling",
  "backend",
  "databases",
  "ai",
  "cloud",
  "devops",
  "tools",
];