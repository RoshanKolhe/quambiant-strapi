export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        "http://localhost:3000",
        "https://quambiant.com",
        "https://staging.quambiant.com",
      ], // 👈 your frontend URL
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      headers: "*",
      credentials: true,
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
