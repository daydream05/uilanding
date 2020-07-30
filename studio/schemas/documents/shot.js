const shortid = require('shortid');

export default {
  type: "document",
  name: "shot",
  title: "Shot",
  initialValue: () => ({
    shortID: shortid.generate(),
  }),
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "shortID",
      type: "string",
      title: "Short ID",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "mainImage",
      title: "Image",
      type: "mainImage",
    },
    {
      name: "siteUrl",
      title: "Site URL",
      type: "url",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],
};
