import * as trpc from "@trpc/server";
import superjson from "superjson";
import { websiteByIdRouter } from "./website-by-id";
import { websiteAllRouter } from "./websites-all";

export const appRouter = trpc
    .router()
    .transformer(superjson)
    .merge("websites", websiteAllRouter)
    .merge("website", websiteByIdRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
