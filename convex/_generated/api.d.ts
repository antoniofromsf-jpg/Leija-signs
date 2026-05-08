/* eslint-disable */
import type { FunctionReference } from "convex/server";

export declare const api: {
  leads: {
    submit: FunctionReference<"mutation", "public">;
    submitLead: FunctionReference<"mutation", "public">;
  };
};
export declare const internal: {
  sendLeadEmail: {
    sendLeadNotification: FunctionReference<"action", "internal">;
  };
};
export declare const components: Record<string, never>;
