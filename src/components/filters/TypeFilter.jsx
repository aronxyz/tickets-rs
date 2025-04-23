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

const TypeFilter = () => {
  let [selected, setSelected] = React.useState(new Set([]));
  return (
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
  );
};

export default TypeFilter;
