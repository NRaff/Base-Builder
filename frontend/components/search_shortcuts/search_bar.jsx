import React from "react";
import { useState } from "react";
import {
  Box,
  useBase,
  Input
} from '@airtable/blocks/ui';
import { SearchResults } from "./search_results";

export function SearchBar({shortcuts}) {
  const [searched, setSearch] = useState("")
  const [results, setResults] = useState(shortcuts)

  function handleSearch(e) {
    setSearch(e.target.value)
    const remainingCmds = shortcuts.filter((cmd) => {
      const query = e.target.value.toLowerCase();
      const actualCmd = cmd.name.toLowerCase();
      return actualCmd.includes(query);
    })
    setResults(remainingCmds)
  }

  return (
    <Box
      as="section"
      border="none"
      backgroundColor="lightGray3"
      width="100%"
      height={200}
      overflow="scroll"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="left"
      height="100%"
      padding={1}
    >
      <Input
        value={searched}
        onChange={handleSearch.bind(this)}
        placeholder="/table or /field etc.."
        size="large"
        width="100%"
        marginBottom={1}
      />
      <SearchResults shortcuts={results} />
    </Box>
  )
}
