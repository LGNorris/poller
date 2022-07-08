import * as trpc from "@trpc/server";
import { prisma } from "../../db/client";

export const websiteAllRouter = trpc.router().query("-all", {
    async resolve() {
        return await prisma.website.findMany();
    },
});
