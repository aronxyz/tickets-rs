import React from "react";
import {
  Button,
  defaultTheme,
  Flex,
  Provider,
  SearchField,
  View,
  MenuTrigger,
  ActionButton,
  Menu,
  Item,
  Well,
  Link,
  Badge,
  StatusLight,
  Meter,
  Divider,
  DialogTrigger,
  Section,
  Text,
  Grid,
} from "@adobe/react-spectrum";
import TicketExcerpt from "../components/TicketExcerpt";
import TicketForm from "../components/TicketForm";
import Close from "@spectrum-icons/workflow/Close";

import { tickets } from "../db";
import { filterTickets } from "../utils/filteringUtils";
import TypeFilter from "../components/filters/TypeFilter";
import PriorityFilter from "../components/filters/PriorityFilter";
import StatusFilter from "../components/filters/StatusFilter";

const Tickets = () => {

  let [selected, setSelected] = React.useState(new Set(["middle"]));
  let [rows, setRows] = React.useState(tickets);

  const filters = {
    title: '',
    type: '',
    priority: 'high',
    status: '',
  };

  React.useEffect(() => {
    setRows(filterTickets(rows, filters))
  }, [selected])

  console.log(tickets);
  return (
    <>
      <Flex wrap="wrap-reverse" gap={"size-100"} marginTop={"size-300"}>
        <Flex
          direction={{ base: "column", M: "row" }}
          gap={"size-100"}
          flexGrow={1}
        >
          <SearchField
            aria-label="Search"
            onSubmit={() => alert("dd")}
            width={"100%"}
          />
          <Flex gap={"size-100"}>
            <TypeFilter />
            <PriorityFilter />
            <StatusFilter />
            <MenuTrigger>
                <ActionButton>Sort</ActionButton>
                <Menu
                  selectionMode="single"
                  selectedKeys={selected}
                  onSelectionChange={setSelected}
                >
                  <Section title="Created at">
                    <Item key="newest">Newest</Item>
                    <Item key="older">Older</Item>
                  </Section>
                </Menu>
              </MenuTrigger>
          </Flex>
        </Flex>
        <DialogTrigger>
          <Button variant="accent" alignSelf={"start"}>New</Button>
          {(close) => <TicketForm close={close} heading="Create ticket" />}
        </DialogTrigger>
      </Flex>
      {selected && (
        <>
          <Divider marginY={"size-200"} size="S" />
          <View>
            <Flex alignItems={"center"} gap={"size-75"}>
              <p style={{ margin: 0 }}>
                21 results for <strong>private</strong> sorted by{" "}
                <strong>priority</strong>
              </p>
              <ActionButton>
                <Close />
                <Text>Clear filters</Text>
              </ActionButton>
            </Flex>
          </View>
        </>
      )}
      <Divider size="S" marginY={"size-200"} />
      <View>
        <Grid columns={{ base: ["1fr"], S: ["1fr", "1fr"] }} columnGap={"size-100"} rowGap={"size-50"}>{rows.map(ticket => (<TicketExcerpt key={ticket.title} data={ticket} />))}</Grid>
      </View>
    </>
  );
};

export default Tickets;
