import { WebRouter } from "@recipe-to-grocery/api";
import { createTRPCReact } from "@trpc/react-query";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

export type TrpcInputs = inferRouterInputs<WebRouter>;
export type TrpcOutputs = NonNullable<inferRouterOutputs<WebRouter>>;

export const trpc = createTRPCReact<WebRouter>();
