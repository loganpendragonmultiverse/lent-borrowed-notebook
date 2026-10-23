export const config = {
  slug: "lent-borrowed-notebook",
  title: "Lent & Borrowed Notebook",
  tagline: "Keep the agreement with the item.",
  intro:
    "A quiet place for the things you lend and borrow. Keep a photo, the person and the agreed return date together, then mark the handoff complete.",
  accent: "#15685d",
  noun: "loan",
  plural: "loans",
  fields: [
    {
      key: "item",
      label: "Item",
      required: true,
      max: 120,
      placeholder: "Blue camping lantern",
    },
    {
      key: "person",
      label: "Person",
      required: true,
      max: 120,
      placeholder: "Alex",
    },
    {
      key: "direction",
      label: "Direction",
      type: "select",
      choices: ["Lent to someone", "Borrowed from someone"],
      required: true,
    },
    {
      key: "date",
      label: "Agreed return date",
      type: "date",
      max: 10,
    },
    {
      key: "notes",
      label: "Agreement or notes",
      type: "textarea",
      max: 2000,
      placeholder: "Include the charger and carry case.",
    },
    {
      key: "done",
      label: "Returned",
      type: "checkbox",
    },
  ],
  attachmentLabel: "Item photo",
  maxAttachments: 1,
  allowPdf: false,
  sample: [
    {
      item: "Blue camping lantern",
      person: "Alex",
      direction: "Lent to someone",
      date: "2026-11-15",
      notes: "Lantern, charging lead and carry case.",
      done: false,
    },
  ],
  limitations:
    "This notebook records your agreement. It does not message people, collect payments or verify that an item changed hands.",
  printTitle: "Lending record",
  printButton: "Print lending record",
};
