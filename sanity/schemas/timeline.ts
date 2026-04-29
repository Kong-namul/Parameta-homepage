import { defineType, defineField } from "sanity";

export const timeline = defineType({
  name: "timeline",
  type: "document",
  title: "Timeline Milestone",
  fields: [
    defineField({ name: "year", type: "number", validation: r => r.required() }),
    defineField({ name: "month", type: "number" }),
    defineField({ name: "title_ko", type: "string", validation: r => r.required() }),
    defineField({ name: "title_en", type: "string" }),
    defineField({ name: "description_ko", type: "text" }),
    defineField({ name: "description_en", type: "text" }),
    defineField({
      name: "category",
      type: "string",
      options: { list: [
        { title: "Founding", value: "founding" },
        { title: "Tech", value: "tech" },
        { title: "Financial", value: "financial" },
        { title: "Public", value: "public" },
        { title: "Global", value: "global" },
        { title: "Certification", value: "certification" },
        { title: "Investment", value: "investment" },
      ]},
    }),
    defineField({ name: "external_link", type: "url" }),
    defineField({
      name: "featured_on_hero",
      type: "boolean",
      description: "Show in Concept 1 Hero mini-timeline (preview)",
    }),
  ],
});
