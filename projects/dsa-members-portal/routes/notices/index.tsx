import { defineRoute } from "$fresh/server.ts";
import { PageNotices } from "@/islands/notices.tsx";
import type { Notice } from "@/mod.ts";
import { db } from "@/netzo.config.ts";

export default defineRoute(async (req, ctx) => {
  const { id } = ctx.params;
  const notices = await db.find<Notice>("notices");

  // render entire page as island for simplicity
  return (
    <PageNotices
      notice={notices.find((a) => a.id === id) ?? notices[0]}
      notices={notices}
    />
  );
});