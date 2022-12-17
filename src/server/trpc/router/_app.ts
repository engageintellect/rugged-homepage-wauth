import { router } from "../trpc";
import { authRouter } from "./auth";
import { apiRouter } from "./api";

export const appRouter = router({
  api: apiRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
