import { internalAction } from "./_generated/server";
import { v } from "convex/values";

export const sendLeadNotification = internalAction({
  args: {
    name: v.string(),
    company: v.string(),
    phone: v.string(),
    email: v.string(),
    projectType: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Leija Signs <noreply@leijasigns.com>",
      to: "admin@leijasigns.com",
      subject: `New Quote Request from ${args.name} - ${args.company}`,
      html: `
        <h2>New Quote Request</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;">
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Name</td><td style="padding:8px;">${args.name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Company</td><td style="padding:8px;">${args.company}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Phone</td><td style="padding:8px;">${args.phone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Email</td><td style="padding:8px;">${args.email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Project Type</td><td style="padding:8px;">${args.projectType}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5;">Message</td><td style="padding:8px;">${args.message}</td></tr>
        </table>
      `,
    });
  },
});
