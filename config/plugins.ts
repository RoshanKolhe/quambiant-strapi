module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("EMAIL_SMTP_HOST", "smtp.gmail.com"),
        port: env("EMAIL_SMTP_PORT", 587),
        secure: false,
        auth: {
          user: env("EMAIL_SMTP_USER"),
          pass: env("EMAIL_SMTP_PASS"),
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      settings: {
        defaultFrom: env("EMAIL_ADDRESS_FROM", "wa@quambiant.com"),
        defaultReplyTo: env("EMAIL_ADDRESS_REPLY", "wa@quambiant.com"),
      },
    },
  },
});
