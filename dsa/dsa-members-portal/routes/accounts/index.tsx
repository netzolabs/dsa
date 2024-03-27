import { defineRoute } from "$fresh/server.ts";
import { PageAccounts } from "@/islands/accounts.tsx";
import { db } from "@/netzo.config.ts";
import type { Account } from "../../../database/accounts.ts";

// NOTE: cannot pass functions as props from routes (server) to islands (client)
export default defineRoute(async (req, ctx) => {
  const accounts = await db.find<Account>("accounts");

  // render entire page as island for simplicity
  return <PageAccounts accounts={accounts} />;
});
