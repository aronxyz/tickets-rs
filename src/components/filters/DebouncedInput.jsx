import { SearchField } from "@adobe/react-spectrum";
import React from "react";

const DebouncedInput = ({ column, onChange }) => {
  let [searchValue, setSearchValue] = React.useState("");
  let [debouncedSearchValue, setDebouncedSearchValue] = React.useState("");

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchValue]);

  React.useEffect(
    () => onChange(column.id, debouncedSearchValue),
    [debouncedSearchValue]
  );

  return (
    <SearchField
      aria-label="Search"
      onClear={() => setSearchValue("")}
      value={searchValue}
      onChange={setSearchValue}
      width={"100%"}
    />
  );
};

export default DebouncedInput;
