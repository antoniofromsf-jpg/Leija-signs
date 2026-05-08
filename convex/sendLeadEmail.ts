import { action } from "./_generated/server";
import { v } from "convex/values";
export const sendLeadNotification = action({
  args: { name: v.string(), company: v.string(), phone: v.string(), email: v.string(), projectType: v.string(), message: v.string() },
  handler: async (_ctx, args) => {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Leija Signs <noreply@leijasigns.com>",
      to: "admin@leijasigns.com",
      subject: `New Quote Request from ${args.name} - ${args.company}`,
      html: `<h2>New Quote Request</h2><p><b>Name:</b> ${args.name}</p><p><b>Company:</b> ${args.company}</p><p><b>Phone:</b> ${args.phone}</p><p><b>Email:</b> ${args.email}</p><p><b>Project:</b> ${args.projectType}</p><p><b>Message:</b> ${args.message}</p>`,
    });
  },
});
