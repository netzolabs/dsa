// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_500 from "./routes/_500.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $accounts_id_ from "./routes/accounts/[id].tsx";
import * as $accounts_index from "./routes/accounts/index.tsx";
import * as $amenities_type_index from "./routes/amenities/[type]/index.tsx";
import * as $bookings_index from "./routes/bookings/index.tsx";
import * as $facilities_id_ from "./routes/facilities/[id].tsx";
import * as $facilities_index from "./routes/facilities/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $notices_index from "./routes/notices/index.tsx";
import * as $orders_id_ from "./routes/orders/[id].tsx";
import * as $orders_index from "./routes/orders/index.tsx";
import * as $publications_index from "./routes/publications/index.tsx";
import * as $sessions_id_ from "./routes/sessions/[id].tsx";
import * as $sessions_index from "./routes/sessions/index.tsx";
import * as $users_id_ from "./routes/users/[id].tsx";
import * as $users_index from "./routes/users/index.tsx";
import * as $account_entries from "./islands/account/entries.tsx";
import * as $account_general from "./islands/account/general.tsx";
import * as $account_guests from "./islands/account/guests.tsx";
import * as $account_mod from "./islands/account/mod.tsx";
import * as $account_statements from "./islands/account/statements.tsx";
import * as $account_users from "./islands/account/users.tsx";
import * as $account_vehicles from "./islands/account/vehicles.tsx";
import * as $accounts from "./islands/accounts.tsx";
import * as $amenities from "./islands/amenities.tsx";
import * as $bookings from "./islands/bookings.tsx";
import * as $bookings_utils from "./islands/bookings.utils.ts";
import * as $facilities from "./islands/facilities.tsx";
import * as $facility from "./islands/facility.tsx";
import * as $home from "./islands/home.tsx";
import * as $mod from "./islands/mod.tsx";
import * as $notices from "./islands/notices.tsx";
import * as $order from "./islands/order.tsx";
import * as $orders from "./islands/orders.tsx";
import * as $publications from "./islands/publications.tsx";
import * as $session from "./islands/session.tsx";
import * as $sessions from "./islands/sessions.tsx";
import * as $user from "./islands/user.tsx";
import * as $users from "./islands/users.tsx";
import * as $vehicles from "./islands/vehicles.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_500.tsx": $_500,
    "./routes/_app.tsx": $_app,
    "./routes/accounts/[id].tsx": $accounts_id_,
    "./routes/accounts/index.tsx": $accounts_index,
    "./routes/amenities/[type]/index.tsx": $amenities_type_index,
    "./routes/bookings/index.tsx": $bookings_index,
    "./routes/facilities/[id].tsx": $facilities_id_,
    "./routes/facilities/index.tsx": $facilities_index,
    "./routes/index.tsx": $index,
    "./routes/notices/index.tsx": $notices_index,
    "./routes/orders/[id].tsx": $orders_id_,
    "./routes/orders/index.tsx": $orders_index,
    "./routes/publications/index.tsx": $publications_index,
    "./routes/sessions/[id].tsx": $sessions_id_,
    "./routes/sessions/index.tsx": $sessions_index,
    "./routes/users/[id].tsx": $users_id_,
    "./routes/users/index.tsx": $users_index,
  },
  islands: {
    "./islands/account/entries.tsx": $account_entries,
    "./islands/account/general.tsx": $account_general,
    "./islands/account/guests.tsx": $account_guests,
    "./islands/account/mod.tsx": $account_mod,
    "./islands/account/statements.tsx": $account_statements,
    "./islands/account/users.tsx": $account_users,
    "./islands/account/vehicles.tsx": $account_vehicles,
    "./islands/accounts.tsx": $accounts,
    "./islands/amenities.tsx": $amenities,
    "./islands/bookings.tsx": $bookings,
    "./islands/bookings.utils.ts": $bookings_utils,
    "./islands/facilities.tsx": $facilities,
    "./islands/facility.tsx": $facility,
    "./islands/home.tsx": $home,
    "./islands/mod.tsx": $mod,
    "./islands/notices.tsx": $notices,
    "./islands/order.tsx": $order,
    "./islands/orders.tsx": $orders,
    "./islands/publications.tsx": $publications,
    "./islands/session.tsx": $session,
    "./islands/sessions.tsx": $sessions,
    "./islands/user.tsx": $user,
    "./islands/users.tsx": $users,
    "./islands/vehicles.tsx": $vehicles,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
