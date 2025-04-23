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

const StatusFilter = () => {
  let [selected, setSelected] = React.useState(new Set([]));
  return (
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
  );
};

export default StatusFilter;
