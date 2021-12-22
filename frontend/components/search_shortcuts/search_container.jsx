import {
  useBase,
} from '@airtable/blocks/ui';
import { cmds } from '../../util/shortcuts';
import React from 'react';
import { SearchBar } from './search_bar';

export function SearchContainer() {
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