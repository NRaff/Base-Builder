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
    <section>
      <Input
        value={searched}
        onChange={handleSearch.bind(this)}
        placeholder="/table or /field etc.."
        size="large"
        width="100%"
      />
      <SearchResults shortcuts={results} />
    </section>
  )
}
