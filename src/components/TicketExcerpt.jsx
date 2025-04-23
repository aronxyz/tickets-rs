import React from "react";

import {
  Flex,
  Well,
  Link,
  Badge,
  StatusLight,
} from "@adobe/react-spectrum";

import Alert from "@spectrum-icons/workflow/Alert";
import { getPriorityColorCode, getStatusColorCode, getTypeColorCode } from "../utils/colorCodeUtils";

const TicketExcerpt = ({ data }) => {

  const { title, description, priority, type, status, progress } = data

  return (
    <Well>
      <Flex direction={"column"} gap={"size-200"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Link href={`tickets/${title}`}>{title}</Link>
          <Flex alignItems={"center"} gap={"size-100"}>
            <Badge variant={getStatusColorCode(status)}>{status}</Badge>
            <Alert aria-label="Negative Alert" color={getPriorityColorCode(priority)} />
          </Flex>
        </Flex>
        <StatusLight variant={getTypeColorCode(type)}>{type}</StatusLight>
      </Flex>
    </Well>
  );
};

export default TicketExcerpt;
