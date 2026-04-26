import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    name: v.string(),
    company: v.string(),
    phone: v.string(),
    email: v.string(),
    projectType: v.string(),
    message: v.string(),
  }),
});
