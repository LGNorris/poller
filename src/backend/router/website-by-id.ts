import * as trpc from "@trpc/server";
import { z } from "zod";
import { prisma } from "../../db/client";

export const websiteByIdRouter = trpc.router().query("-by-id", {
    input: z.object({ urlSlug: z.string() }),
    async resolve({ input }) {
        return await prisma.website.findFirst({
            where: {
                urlSlug: input.urlSlug,
            },
        });
    },
});
