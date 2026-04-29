import { defineType, defineField } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  type: "document",
  title: "Case Study",
  fields: [
    defineField({ name: "client_name", type: "string", validation: r => r.required() }),
    defineField({
      name: "industry",
      type: "string",
      options: { list: [
        { title: "Financial", value: "financial" },
        { title: "Public", value: "public" },
        { title: "Enterprise", value: "enterprise" },
      ]},
    }),
    defineField({
      name: "products_used",
      type: "array",
      of: [{ type: "string", options: { list: [
        { title: "ParaSta", value: "parasta" },
        { title: "Supercycl", value: "supercycl" },
        { title: "MyID 2.0", value: "myid" },
        { title: "broof", value: "broof" },
      ]}}],
    }),
    defineField({ name: "summary_ko", type: "text" }),
    defineField({ name: "summary_en", type: "text" }),
    defineField({ name: "metrics_ko", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "narrative_ko", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "year", type: "number" }),
    defineField({ name: "logo", type: "image" }),
    defineField({ name: "featured", type: "boolean" }),
  ],
});
