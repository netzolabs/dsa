import { defineRoute } from "$fresh/server.ts";
import { PageAccount } from "@/islands/account.tsx";
import type { Account, Statement, Vehicle } from "@/mod.ts";
import { db } from "@/netzo.config.ts";

export default defineRoute(async (req, ctx) => {
  const { id } = ctx.params;
  const [account, allUsers, allVehicles, allStatements] = await Promise.all([
    db.get<Account>("accounts", id),
    db.find<User>("users"),
    db.find<Vehicle>("vehicles"),
    db.find<Statement>("statements"),
  ]);

  const users = allUsers.filter((u) => u.accountId === account?.id);

  const vehicles = allVehicles.filter((v) => v.accountId === account?.id);

  const statements = allStatements.filter((s) => s.accountId === account?.id);

  // render entire page as island for simplicity
  return <PageAccount {...{ id, account, users, vehicles, statements }} />;
});