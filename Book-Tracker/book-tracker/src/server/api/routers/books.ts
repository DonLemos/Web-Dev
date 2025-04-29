import { createTRPCContext } from "../../trpc";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const booksRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.book.findMany();
  }),

  getOne: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    return ctx.db.book.findUnique({
      where: { id: input },
    });
  }),

  add: protectedProcedure.input(
    z.object({
      title: z.string(),
      author: z.string(),
      status: z.string(),
      rating: z.number().optional(),
      notes: z.string().optional(),
      coverImageUrl: z.string().optional(),
    })
  ).mutation(async ({ ctx, input }) => {
    return ctx.db.book.create({
      data: input,
    });
  }),

  update: protectedProcedure.input(
    z.object({
      id: z.string(),
      title: z.string().optional(),
      author: z.string().optional(),
      status: z.string().optional(),
      rating: z.number().optional(),
      notes: z.string().optional(),
      coverImageUrl: z.string().optional(),
    })
  ).mutation(async ({ ctx, input }) => {
    return ctx.db.book.update({
      where: { id: input.id },
      data: input,
    });
  }),

  delete: protectedProcedure.input(z.string()).mutation(async ({ ctx, input }) => {
    return ctx.db.book.delete({
      where: { id: input },
    });
  }),
});
