import { mutation, internalAction } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";
import { internal } from "./_generated/api";

export const submit = mutation({
  args: {
    name: v.string(),
    company: v.string(),
    phone: v.string(),
    email: v.string(),
    projectType: v.string(),
    message: v.string(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    await ctx.db.insert("leads", {
      name: args.name,
      company: args.company,
      phone: args.phone,
      email: args.email,
      projectType: args.projectType,
      message: args.message,
    });

    // Schedule the email to be sent
    await ctx.scheduler.runAfter(0, internal.leads.sendLeadEmail, args);
    
    return null;
  },
});

export const sendLeadEmail = internalAction({
  args: {
    name: v.string(),
    company: v.string(),
    phone: v.string(),
    email: v.string(),
    projectType: v.string(),
    message: v.string(),
  },
  returns: v.null(),
  handler: async (_ctx, args) => {
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not set. Email notification skipped.");
      return null;
    }

    const resend = new Resend(resendApiKey);

    try {
      await resend.emails.send({
        from: "Leija Signs <onboarding@resend.dev>",
        to: ["admin@leijasigns.com"],
        subject: `New Quote Request: ${args.projectType} - ${args.company}`,
        text: `
New Quote Request Received:

Name: ${args.name}
Company: ${args.company}
Phone: ${args.phone}
Email: ${args.email}
Project Type: ${args.projectType}

Project Details:
${args.message}
        `,
      });
    } catch (error) {
      console.error("Failed to send email via Resend:", error);
    }
    
    return null;
  },
});
