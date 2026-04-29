import { defineType, defineField } from "sanity";

export const newsroom = defineType({
  name: "newsroom",
  type: "document",
  title: "Newsroom",
  fields: [
    defineField({ name: "title_ko", type: "string", validation: r => r.required() }),
    defineField({ name: "title_en", type: "string" }),
    defineField({ name: "summary_ko", type: "text" }),
    defineField({ name: "summary_en", type: "text" }),
    defineField({ name: "image", type: "image" }),
    defineField({
      name: "category",
      type: "string",
      options: { list: [
        { title: "Press", value: "press" },
        { title: "Notice", value: "notice" },
        { title: "Event", value: "event" },
      ]},
    }),
    defineField({ name: "publish_date", type: "date", validation: r => r.required() }),
    defineField({ name: "external_link", type: "url" }),
  ],
});
