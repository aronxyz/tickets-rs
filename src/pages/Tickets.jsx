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
} from "@adobe/react-spectrum";
import TicketExcerpt from "../components/TicketExcerpt";
import TicketForm from "../components/TicketForm";
import Close from "@spectrum-icons/workflow/Close";
const Tickets = () => {
  let [submittedText, setSubmittedText] = React.useState(null);
  let [action, setAction] = React.useState(null);
  let [selected, setSelected] = React.useState(new Set(["middle"]));

  console.log(selected);
  return (
    <>
      <Flex gap={"size-100"} marginTop={"size-300"}>
        <Flex
          direction={{ base: "column", M: "row" }}
          gap={"size-100"}
          flexGrow={1}
        >
          <SearchField
            maxWidth={576}
            width={"100%"}
            aria-label="Search"
            onSubmit={setSubmittedText}
          />
          <Flex gap={"size-100"}>
            <View>
              <MenuTrigger>
                <ActionButton>Type</ActionButton>
                <Menu
                  selectionMode="single"
                  selectedKeys={selected}
                  onSelectionChange={setSelected}
                >
                  <Item key="bug">Bug</Item>
                  <Item key="feature">Feature</Item>
                  <Item key="improvement">Improvement</Item>
                </Menu>
              </MenuTrigger>
            </View>
            <View>
              <MenuTrigger>
                <ActionButton>Priority</ActionButton>
                <Menu
                  selectionMode="single"
                  selectedKeys={selected}
                  onSelectionChange={setSelected}
                >
                  <Item key="low">Low</Item>
                  <Item key="medium">Medium</Item>
                  <Item key="high">High</Item>
                </Menu>
              </MenuTrigger>
            </View>
            <View>
              <MenuTrigger>
                <ActionButton>Status</ActionButton>
                <Menu
                  selectionMode="single"
                  selectedKeys={selected}
                  onSelectionChange={setSelected}
                >
                  <Item key="open">Open</Item>
                  <Item key="in-progress">In Progress</Item>
                  <Item key="blocked">Blocked</Item>
                  <Item key="in-review">In Review</Item>
                  <Item key="completed">Completed</Item>
                </Menu>
              </MenuTrigger>
            </View>
            <View>
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
            </View>
          </Flex>
        </Flex>
        <DialogTrigger>
          <Button variant="accent">New</Button>
          {(close) => <TicketForm close={close} heading="Create ticket" />}
        </DialogTrigger>
      </Flex>
      {selected && (
        <View>
          <Divider marginY={"size-200"} size="S" />
          <Flex alignItems={"center"} gap={"size-75"}>
            <p style={{margin: 0}}>
              21 results for <strong>private</strong> sorted by{" "}
              <strong>priority</strong>
            </p>
            <ActionButton><Close/><Text>Clear filters</Text></ActionButton>
          </Flex>
        </View>
      )}
      <Divider size="S" marginY={"size-200"} />
      <View>
        <TicketExcerpt />
      </View>
    </>
  );
};

export default Tickets;
