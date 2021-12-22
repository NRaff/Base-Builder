import {
  useBase,
} from '@airtable/blocks/ui';
import { cmds } from '../util/shortcuts';
import React, { useState } from 'react';
import { SearchBar } from './search_shortcuts/search_bar';

export function CreateSchema() {
  const base = useBase();
  const tables = base.tables.map((table) => {
    return {
      name: table.name,
      id: table.id,
      type: "Table"
    }
  });
  const userCmds = cmds.concat(tables)
  return (
    <SearchBar shortcuts={userCmds} />
  )
}