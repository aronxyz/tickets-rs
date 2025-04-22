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
} from "@adobe/react-spectrum";

import Alert from "@spectrum-icons/workflow/Alert";

const TicketExcerpt = () => {
  return (
    <Well maxWidth={"size-3400"}>
      <Flex direction={"column"} gap={"size-200"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Link href="tickets/test">I dropped my PC</Link>
          <Alert aria-label="Negative Alert" color="negative" />
        </Flex>
        <StatusLight variant="seafoam">Hardware</StatusLight>
      </Flex>
    </Well>
  );
};

export default TicketExcerpt;
