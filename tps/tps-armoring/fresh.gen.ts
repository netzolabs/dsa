// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_500 from "./routes/_500.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $incidents_index from "./routes/incidents/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $product_groups_index from "./routes/product-groups/index.tsx";
import * as $units_id_ from "./routes/units/[id].tsx";
import * as $units_index from "./routes/units/index.tsx";
import * as $dashboard from "./islands/dashboard.tsx";
import * as $incidents from "./islands/incidents.tsx";
import * as $mod from "./islands/mod.tsx";
import * as $product_groups from "./islands/product-groups.tsx";
import * as $unit from "./islands/unit.tsx";
import * as $units from "./islands/units.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_500.tsx": $_500,
    "./routes/_app.tsx": $_app,
    "./routes/incidents/index.tsx": $incidents_index,
    "./routes/index.tsx": $index,
    "./routes/product-groups/index.tsx": $product_groups_index,
    "./routes/units/[id].tsx": $units_id_,
    "./routes/units/index.tsx": $units_index,
  },
  islands: {
    "./islands/dashboard.tsx": $dashboard,
    "./islands/incidents.tsx": $incidents,
    "./islands/mod.tsx": $mod,
    "./islands/product-groups.tsx": $product_groups,
    "./islands/unit.tsx": $unit,
    "./islands/units.tsx": $units,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
