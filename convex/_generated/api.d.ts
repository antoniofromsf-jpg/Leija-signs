/* eslint-disable */
import type { ApiFromModules, FilterApi, FunctionReference } from "convex/server";
declare const fullApi: ApiFromModules<{
  leads: { submit: FunctionReference<"mutation","public">; submitLead: FunctionReference<"mutation","public">; };
  sendLeadEmail: { sendLeadNotification: FunctionReference<"action","public">; };
}>;
declare const fullApiWithMounts: typeof fullApi;
export declare const api: FilterApi<typeof fullApiWithMounts, FunctionReference<any, "public">>;
export declare const internal: FilterApi<typeof fullApiWithMounts, FunctionReference<any, "internal">>;
export declare const components: {};
