import { type Entry, toDate, toQRCode, useTableUtils } from "@/mod.ts";
import { ENTRY_TYPE_OPTIONS } from "@/utils/constants.ts";
import { useSignal } from "@preact/signals";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "netzo/components/avatar.tsx";
import {
  TableActionsReload,
  TableColumnHeader,
  TableFilters,
  TablePagination,
  TableRowActions,
  TableSearch,
  TableView,
  TableViewOptions,
  useTable,
} from "netzo/components/blocks/table/table.tsx";
import { Button } from "netzo/components/button.tsx";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "netzo/components/card.tsx";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "netzo/components/dialog.tsx";
import { DropdownMenuItem } from "netzo/components/dropdown-menu.tsx";
import { useState } from "preact/hooks";

export function CardEntries(props: { entries: Entry[] }) {
  // table requires useState for data (useSignal/signal not supported)
  const [data, setData] = useState<Entry[]>(props.entries ?? []);
  const active = useSignal<Entry>({});

  const {
    create,
    update,
    duplicate,
    remove,
    copyId,
    downloadAsCsv,
  } = useTableUtils<Entry>({
    endpoint: "/datastore/entries",
    data,
    setData,
    active,
    getDefault: () => ({}),
  });

  const table = useTable<Entry>({
    data,
    columns: [
      {
        id: "actions",
        title: "Acciones",
        cell: (props) => {
          const { id } = props.row.original;

          return (
            <div className="flex w-max flex-row items-center justify-left gap-2">
              <TableRowActions>
                <DropdownMenuItem
                  onSelect={() => copyId(props.row.original)}
                >
                  Copiar ID
                </DropdownMenuItem>
              </TableRowActions>
            </div>
          );
        },
      },
      {
        accessorKey: "name",
        title: "Nombre",
        header: (props) => <TableColumnHeader {...props} />,
        cell: ({ row }) => {
          const { user: { name = "", image } } = row.original;
          return (
            <div className="flex items-center p-1 gap-2">
              <Avatar className="h-7 w-7">
                <AvatarImage src={image} />
                <AvatarFallback>{name[0]?.toUpperCase()}</AvatarFallback>
              </Avatar>
              <span className="w-max">{name?.toUpperCase()}</span>
            </div>
          );
        },
      },
      {
        accessorKey: "type",
        title: "Tipo",
        header: (props) => <TableColumnHeader {...props} />,
        cell: ({ row }) => {
          const { type } = row.original;
          if (!type) return null;
          const props = ENTRY_TYPE_OPTIONS.find(({ value }) => value === type);
          if (!props) return type;
          return (
            <div
              className={"flex items-center justify-center p-1"}
              style={{ backgroundColor: `${props.hexaColor}50` }}
            >
              <span className="w-max">{props.label}</span>
            </div>
          );
        },
        filterFn: (row, id, value) => value.includes(row.getValue(id)),
      },
      {
        accessorKey: "createdAt",
        title: "Fecha y hora",
        header: (props) => <TableColumnHeader {...props} />,
        cell: ({ row }) => {
          const { createdAt = "" } = row.original;
          return (
            <div className="flex items-center p-1">
              <span className="w-max">{toDate(createdAt)}</span>
            </div>
          );
        },
      },
      {
        accessorKey: "actionQrcode",
        title: "Código QR",
        header: (props) => <TableColumnHeader {...props} />,
        cell: ({ row }) => {
          const { createdAt = "", user: { id } } = row.original;
          const url = toQRCode(
            `${globalThis?.location?.origin}/entries/${id}`,
          );
          return (
            <div className="flex items-center justify-center p-1">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    className="w-8 h-8 cursor-pointer"
                    src={url}
                  />
                </DialogTrigger>
                <DialogContent>
                  <CardHeader>
                    <CardTitle>
                      Código QR
                    </CardTitle>
                    <CardDescription>
                      El código QR es único y no debe ser compartido. Este
                      código QR es válido por 24 horas a partir de su
                      generación.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={url}
                      style="width: 250px; height: 250px; margin: auto;"
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      onClick={() => {
                        globalThis?.navigator?.canShare({
                          title: "Código QR",
                          text: "Código QR",
                          url,
                        });
                      }}
                    >
                      Compartir
                    </Button>
                  </CardFooter>
                </DialogContent>
              </Dialog>
            </div>
          );
        },
      },
    ],
    // NOTE: columnVisibility, search, sorting, and filters use table.getColumn() and MUST
    // reference nested columns with underscore syntax (e.g. "data.name" is "data_name")
    initialState: {
      search: {
        column: "name",
        placeholder: "Filtrar por nombre...",
      },
      sorting: [
        { id: "name", desc: false },
      ],
      filters: [
        {
          column: "type",
          title: "Tipo",
          options: ENTRY_TYPE_OPTIONS.map(({ value, label }) => ({
            value,
            label,
          })),
        },
      ],
    },
    meta: {
      setData,
      create,
      update,
      remove,
      duplicate,
      copyId,
      downloadAsCsv,
    },
  });

  return (
    <div className="grid grid-rows-[min-content_auto_min-content]">
      <header className="flex items-center justify-between pb-2">
        <div className="flex items-center flex-1 space-x-2">
          <TableActionsReload table={table} />
          <TableSearch table={table} />
          <TableFilters table={table} />
        </div>
        <div className="flex items-center space-x-2">
          <TableViewOptions table={table} />
          <Button
            variant="outline"
            size="sm"
            title="Descargar CSV"
            className="text-[#44C082] border-[#44C082] ml-2"
            disabled={false}
            onClick={() => {
              const data = table.getFilteredRowModel().rows.map((r) =>
                r.original
              );
              downloadAsCsv(data, "entries");
            }}
          >
            <i className="i-mdi-download" />
          </Button>
        </div>
      </header>
      <div className="border rounded-md">
        <TableView table={table} />
      </div>
      <footer className="flex items-center justify-between">
        <TablePagination table={table} />
      </footer>
    </div>
  );
}
