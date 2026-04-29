import { defineType, defineField } from "sanity";

export const insight = defineType({
  name: "insight",
  type: "document",
  title: "Insight",
  fields: [
    defineField({ name: "title_ko", type: "string", title: "Title (KO)", validation: r => r.required() }),
    defineField({ name: "title_en", type: "string", title: "Title (EN)" }),
    defineField({ name: "summary_ko", type: "text", title: "Summary (KO)" }),
    defineField({ name: "summary_en", type: "text", title: "Summary (EN)" }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "body_ko", type: "array", title: "Body (KO)", of: [{ type: "block" }] }),
    defineField({ name: "body_en", type: "array", title: "Body (EN)", of: [{ type: "block" }] }),
    defineField({
      name: "category",
      type: "string",
      options: { list: [
        { title: "Market", value: "market" },
        { title: "Tech", value: "tech" },
        { title: "Policy", value: "policy" },
      ]},
    }),
    defineField({ name: "publish_date", type: "date", validation: r => r.required() }),
    defineField({ name: "external_link", type: "url" }),
    defineField({ name: "tags", type: "array", of: [{ type: "string" }] }),
  ],
});
