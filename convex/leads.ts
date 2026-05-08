import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

export const submitLead = mutation({
  args: {
    name: v.string(),
    company: v.string(),
    phone: v.string(),
    email: v.string(),
    projectType: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const leadId = await ctx.db.insert("leads", args);
    await ctx.scheduler.runAfter(0, internal.sendLeadEmail.sendLeadNotification, args);
    return leadId;
  },
});
