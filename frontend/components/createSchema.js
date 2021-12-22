import {
  Box,
  useBase,
} from '@airtable/blocks/ui';
import {
  Input,
  Text,
} from '@airtable/blocks/ui';
import { cmds } from '../util/shortcuts';
import { SearchItem } from './search/search_item';
import React, { useState } from 'react';

export function CreateSchema() {
  const [value, setValue] = useState("");
  const base = useBase();
  const tables = base.tables.map((table) => {
    return {
      name: table.name,
      id: table.id,
      type: "Table"
    }
  });

  const userCmds = cmds.concat(tables)

  const [userShortcuts, setCmds] = useState(userCmds);

  function handleEventSearch(e) {
    setValue(e.target.value)
    const remainingCmds = userCmds.filter((cmd) => {
      const searched = e.target.value.toLowerCase();
      const actualCmd = cmd.name.toLowerCase();
      return actualCmd.includes(searched);
    })
    setCmds(remainingCmds);
  }

  let allCmds = userShortcuts.map((cmd) => {
    return (
      <SearchItem cmd={cmd} />
    )
  })
  
  return (
    <Box
      border="thick"
      borderRadius="default"
      backgroundColor="lightGray1"
      padding={2}
      width="100%"
      height={200}
      overflow="hidden"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="left"
      height="100%"
    >
      <Input
        value={value}
        onChange={handleEventSearch.bind(this)}
        placeholder="/table or /field etc.."
        size="large"
        width="100%"
      />
      <Box
        border="none"
        backgroundColor="lightGray3"
        padding={1}
        width="100%"
        height={200}
        overflow="hidden"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="left"
        height="100%"
      >
        {allCmds}
      </Box>
    </Box>
  )
}