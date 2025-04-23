import React from "react";
import {
  Button,
  Flex,
  View,
  ActionButton,
  Item,
  Divider,
  DialogTrigger,
  Text,
  Grid,
  ToastQueue,
  TagGroup,
} from "@adobe/react-spectrum";
import TicketExcerpt from "../components/TicketExcerpt";
import TicketForm from "../components/TicketForm";
import Close from "@spectrum-icons/workflow/Close";

import { tickets } from "../db";
import { filterTickets } from "../utils/filteringUtils";

import {
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { columns } from "../utils/columns";
import Filter from "../components/filters/Filter";
import FiltersSummary from "../components/filters/FiltersSummary";

const Tickets = () => {
  
  const [columnFilters, setColumnFilters] = React.useState([]);
  const handleFilterChange = (columnId, value) => {
    const column = table.getColumn(columnId);
    column?.setFilterValue(value); // this will trigger onColumnFiltersChange
  };

  const table = useReactTable({
    data: tickets,
    columns: columns,
    state: {
      columnFilters, // <- your controlled filter state
    },
    onColumnFiltersChange: setColumnFilters, // <- updates your state
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues()
  });


  return (
    <>
      <Flex
        wrap="wrap-reverse"
        gap={"size-200"}
        marginTop={"size-300"}
        marginBottom={"size-200"}
      >
        <Flex
          direction={{ base: "column", M: "row" }}
          gap={"size-100"}
          flexGrow={1}
        >
          <Filter column={table.getColumn("title")} onChange={handleFilterChange} />
          <Flex gap={"size-100"}>
            <Filter filterVariant="select" column={table.getColumn("type")} onChange={handleFilterChange} label="Type" />
            <Filter filterVariant="select" column={table.getColumn("priority")} onChange={handleFilterChange} label="Priority" />
            <Filter filterVariant="select" column={table.getColumn("status")} onChange={handleFilterChange} label="Status" />
          </Flex>
        </Flex>
        <DialogTrigger>
          <Button
            variant="accent"
            alignSelf={"start"}
            width={{ base: "100%", S: "size-900" }}
          >
            New
          </Button>
          {(close) => <TicketForm close={close} heading="Create ticket" />}
        </DialogTrigger>
      </Flex>
      {columnFilters.length > 0 && <FiltersSummary tableInstance={table} columnFilters={columnFilters} />}
      <Divider size="S" />
      <View paddingY={"size-300"}>
        <Grid
          columns={{ base: ["1fr"], S: ["1fr", "1fr"] }}
          columnGap={"size-100"}
          rowGap={"size-50"}
        >
          {table.getRowModel().rows.map((row) => (
            <TicketExcerpt key={row.id} data={row.original} />
          ))}
        </Grid>
        <Button
          onPress={() =>
            ToastQueue.positive("Toast is done!", {
              timeout: 5000,
            })
          }
          variant="primary"
        >
          Show toast
        </Button>
      </View>
    </>
  );
};

export default Tickets;
