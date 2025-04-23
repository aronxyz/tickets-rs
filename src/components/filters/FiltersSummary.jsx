import {
  ActionButton,
  Button,
  Divider,
  Flex,
  LabeledValue,
} from "@adobe/react-spectrum";
import React from "react";

const FiltersSummary = ({ tableInstance,  columnFilters }) => {
  
  return (
    <>
      <Divider size="S" />
      <Flex alignItems={"center"} gap={"size-250"}>
        <div role="region" aria-label="Active filters">
          <ul
            style={{
              display: "flex",
              gap: 16,
              listStyleType: "none",
              paddingLeft: 0,
            }}
          >
            {columnFilters.map((colFilter) => (
              <li key={colFilter.id}>
                <LabeledValue
                  labelPosition="side"
                  label={colFilter.id}
                  value={String(colFilter.value)}
                />
              </li>
            ))}
          </ul>
        </div>
        <ActionButton isQuiet aria-label="Clear all filters" onPress={() => tableInstance.resetColumnFilters()}>
          Clear
        </ActionButton>
      </Flex>
    </>
   
  );
};

export default FiltersSummary;
