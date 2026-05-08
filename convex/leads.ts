import { mutation, action } from "./_generated/server";
import { v } from "convex/values";

export const submit = mutation({
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
    return leadId;
  },
});

export const submitLead = submit;
