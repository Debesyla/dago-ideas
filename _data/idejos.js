const fs = require("node:fs");
const path = require("node:path");
const matter = require("gray-matter");

// Load updates and body content from the single source `_includes/idejos.md`.
// - updates: array of dates
// - latest: newest update by date
// - body: .md content
module.exports = () => {
  const filePath = path.resolve(__dirname, "../_includes/idejos.md");
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);

  const updates = Array.isArray(parsed.data?.updates) ? parsed.data.updates.slice() : [];

  // Sort by date ascending based on ISO-like date strings (YYYY-MM-DD)
  updates.sort((a, b) => new Date(a.date) - new Date(b.date));
  const latest = updates.length ? updates[updates.length - 1] : null;

  return {
    updates,
    latest,
    body: parsed.content || "",
  };
};
