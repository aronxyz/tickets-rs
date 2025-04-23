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

const PriorityFilter = () => {
  let [selected, setSelected] = React.useState(new Set([]));
  return (
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
  );
};

export default PriorityFilter;
