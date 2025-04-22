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

const SingleTicket = () => {
  return (
    <div>
      <Flex
        gap={"size-100"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Heading level={1}>Single ticket</Heading>
        <Flex gap={"size-100"}>
          <DialogTrigger>
            <ActionButton>
              <Draw />
              <Text>Edit</Text>
            </ActionButton>
            {(close) => (
              <TicketForm
                defaultValues={{
                  title: "ss",
                  description: "ss",
                  priority: "low",
                  type: "feature",
                  status: "in-progress",
                  progress: 0.438,
                }}
                close={close}
                heading="Edit ticket"
              />
            )}
          </DialogTrigger>
          <DialogTrigger>
            <ActionButton>
              <Delete />
              <Text>Delete</Text>
            </ActionButton>
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
        <Well order={{ base: 2, S: 1 }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            pharetra suscipit lorem id sodales. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </Well>
        <Well order={{ base: 1, S: 2 }} minWidth={"size-3000"}>
          <LabeledValue
            label="Priority"
            value={
              <View paddingTop={"size-50"} paddingBottom={"size-75"}>
                <Flex alignItems={"center"}>
                  <Alert
                    marginX={"size-150"}
                    aria-label="Negative Alert"
                    color="negative"
                    size="S"
                  />
                  <span>High</span>
                </Flex>
              </View>
            }
          />
          <Divider size="S" marginY={"size-100"} />
          <LabeledValue
            label="Type"
            value={<StatusLight variant="seafoam">Hardware</StatusLight>}
          />
          <Divider size="S" marginY={"size-100"} />
          <LabeledValue
            label="Status"
            value={
              <View paddingTop={"size-50"} paddingBottom={"size-75"}>
                <Badge variant="neutral">Not started</Badge>
              </View>
            }
          />
          <Divider size="S" marginY={"size-100"} />
          <View paddingTop={"size-50"} paddingBottom={"size-75"}>
            <Meter label="Progress" value={35} />
          </View>
        </Well>
      </Grid>
    </div>
  );
};

export default SingleTicket;
