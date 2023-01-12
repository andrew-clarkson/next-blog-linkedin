module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});

//https://strapi.io/blog/add-cloudinary-support-to-your-strapi-application
//https://medium.com/@leodeo/integrating-cloudinary-with-strapi-b2edd8878c61
