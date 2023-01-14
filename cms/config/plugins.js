module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-firebase-storage",
      providerOptions: {
        serviceAccount: require("../service-account-key.json"),
        bucketUrl: env("STORAGE_BUCKET_URL"),
        uploadOptions: {
          public: true,
        },
        deleteOptions: {},
      },
    },
  },
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: "api::post.post",
          draft: {
            url: `${env("PUBLIC_URL")}/preview`,
            query: {
              slug: "{slug}",
            },
          },
          published: {
            url: `${env("PUBLIC_URL")}/blog/{slug}`,
          },
        },
      ],
    },
  },
});
