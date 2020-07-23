export default {
  type: "document",
  name: "shot",
  title: "Shot",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "mainImage",
      title: "Image",
      type: "mainImage",
    },
    {
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
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
