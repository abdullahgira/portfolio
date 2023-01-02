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
  "ckeditor": {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-ckeditor",
  },
});
