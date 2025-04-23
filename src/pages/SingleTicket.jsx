import React from "react";
import {
  Button,
  defaultTheme,
  Flex,
  Provider,
  SearchField,
  View,
  MenuTrigger,
  Item,
  Menu,
  Well,
  Link,
  Badge,
  StatusLight,
  Meter,
  Divider,
  Heading,
  ActionGroup,
  LabeledValue,
  Text,
  DialogTrigger,
  Dialog,
  Content,
  ButtonGroup,
  Grid,
} from "@adobe/react-spectrum";

import Alert from "@spectrum-icons/workflow/Alert";
import Draw from "@spectrum-icons/workflow/Draw";
import Delete from "@spectrum-icons/workflow/Delete";
import TicketForm from "../components/TicketForm";
import { useParams } from "react-router-dom";
import { tickets } from "../db";
import { getPriorityColorCode, getStatusColorCode, getTypeColorCode } from "../utils/colorCodeUtils";

const SingleTicket = () => {
  const { title } = useParams();

  const ticket = tickets.find(t => t.title === title);
  console.log(ticket) 
  const { description, priority, type, status, progress } = ticket;

  return (
    <div>
      <Flex
        gap={"size-100"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Heading level={1}>{title}</Heading>
        <Flex gap={"size-100"}>
          <ActionGroup overflowMode="collapse">
            <DialogTrigger>
              <Item key="edit" aria-label="Edit">
                <Draw />
              </Item>
              {(close) => (
                <TicketForm
                  defaultValues={ticket}
                  close={close}
                  heading="Edit ticket"
                />
              )}
            </DialogTrigger>
            <DialogTrigger>
              <Item aria-label="Delete">
                <Delete />
              </Item>
              {(close) => (
                <Dialog>
                  <Heading>Delete</Heading>
                  <Divider />
                  <Content>
                    <Text>Are you sure you want to delete this item?</Text>
                  </Content>
                  <ButtonGroup>
                    <Button variant="secondary" onPress={close}>
                      Cancel
                    </Button>
                    <Button variant="negative" onPress={close} autoFocus>
                      Delete
                    </Button>
                  </ButtonGroup>
                </Dialog>
              )}
            </DialogTrigger>
          </ActionGroup>
        </Flex>
      </Flex>
      <Divider size="S" />
      <Grid
        columns={{
          base: ["1fr"],
          S: ["3fr", "1fr"],
        }}
        alignItems={"start"}
        gap={"size-300"}
        marginY={"size-300"}
      >
        <Well>
          <p>{description}</p>
        </Well>
        <Well minWidth={"size-3000"}>
          <LabeledValue
            label="Priority"
            value={
              <View paddingTop={"size-50"} paddingBottom={"size-75"}>
                <Flex alignItems={"center"}>
                  <Alert
                    marginX={"size-150"}
                    aria-label="Negative Alert"
                    color={getPriorityColorCode(priority)}
                    size="S"
                  />
                  <span>{priority}</span>
                </Flex>
              </View>
            }
          />
          <Divider size="S" marginY={"size-100"} />
          <LabeledValue
            label="Type"
            value={<StatusLight variant={getTypeColorCode(type)}>{type}</StatusLight>}
          />
          <Divider size="S" marginY={"size-100"} />
          <LabeledValue
            label="Status"
            value={
              <View paddingTop={"size-50"} paddingBottom={"size-75"}>
                <Badge variant={getStatusColorCode(status)}>{status}</Badge>
              </View>
            }
          />
          <Divider size="S" marginY={"size-100"} />
          <View paddingTop={"size-50"} paddingBottom={"size-75"}>
            <Meter label="Progress" value={progress} />
          </View>
        </Well>
      </Grid>
    </div>
  );
};

export default SingleTicket;
