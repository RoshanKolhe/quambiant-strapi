module.exports = {
  async afterCreate(event) {
    const { result } = event;

    strapi.log.info("Running afterCreate lifecycle for enquiry", result);

    try {
      const emailConfig = {
        to: "sales@quambiant.com",
        from: "wa@quambiant.com",
        subject: `New Enquiry from ${result.name || "Website"}`,
        html: `
          <h2>New Enquiry Received for ${result.projectName || "Website"}</h2>
          <p><strong>Name:</strong> ${result.name || "Not provided"}</p>
          <p><strong>Email:</strong> ${result.email || "Not provided"}</p>
          <p><strong>Phone Number:</strong> ${result.phoneNumber || "Not provided"}</p>
          <p><strong>Project of Interest:</strong> ${result.projectOfInterest || "Not provided"}</p>
          <p><strong>Message:</strong> ${result.message || "No message"}</p>
        `,
      };

      strapi.log.info("Sending email with config:", emailConfig);
      await strapi.plugins["email"].services.email.send(emailConfig);
      strapi.log.info("Enquiry email sent successfully");
    } catch (err) {
      strapi.log.error("Failed to send enquiry email", err);
    }
  },
};
