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
import { getPriorityColorCode, getTypeColorCode } from "../utils/colorCodeUtils";

const TicketExcerpt = ({ data }) => {

  const { title, description, priority, type, status, progress } = data

  return (
    <Well>
      <Flex direction={"column"} gap={"size-200"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Link href={`tickets/${title}`}>{title}</Link>
          <Alert aria-label="Negative Alert" color={getPriorityColorCode(priority)} />
        </Flex>
        <StatusLight variant={getTypeColorCode(type)}>{type}</StatusLight>
      </Flex>
    </Well>
  );
};

export default TicketExcerpt;
