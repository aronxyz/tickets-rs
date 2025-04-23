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
  ContextualHelpTrigger,
  Dialog,
  Heading,
  Content,
} from "@adobe/react-spectrum";
import { capitalizeFirstLetter } from "../../utils/helpers";
import DebouncedInput from "./DebouncedInput";

const Filter = ({ column, filterVariant = null, label, onChange }) => {
  const sortedUniqueValues = React.useMemo(
    () =>
      filterVariant === "range"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys())
            .sort()
            .slice(0, 5000),
    [column.getFacetedUniqueValues(), filterVariant]
  );

  const renderMenuItems = () => {
    return sortedUniqueValues.length > 0 ? (
      sortedUniqueValues.map((key) => (
        <Item key={key}>{capitalizeFirstLetter(key)}</Item>
      ))
    ) : (
      <ContextualHelpTrigger isUnavailable>
        <Item key="no-options">No options.</Item>
        <Dialog>
          <Heading>No options for your search.</Heading>
          <Content></Content>
        </Dialog>
      </ContextualHelpTrigger>
    );
  };
  console.log(sortedUniqueValues);

  return filterVariant === "select" ? (
    <MenuTrigger>
      <ActionButton>{label}</ActionButton>
      <Menu
        selectionMode="single"
        selectedKeys={
          column.getFilterValue()
            ? new Set([column.getFilterValue()])
            : new Set([])
        }
        onSelectionChange={(selected) => onChange(column.id, [...selected][0])}
      >
        {renderMenuItems()}
      </Menu>
    </MenuTrigger>
  ) : (
    <DebouncedInput column={column} onChange={onChange} />
  );
};

export default Filter;
