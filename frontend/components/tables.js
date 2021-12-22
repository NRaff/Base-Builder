import React, { useState } from 'react';
import {
  useBase,
  Box,
  Icon,
  Text
} from '@airtable/blocks/ui';
import { TableItem } from './table_item';

export function Tables() {
  const base = useBase();
  const tableNames = base.tables.map((table, idx) => {
    return (
      <TableItem table={table} />
    )
  })

  return (
    <Box
      border="none"
      backgroundColor="lightGray3"
      padding={1}
      width={200}
      height="100%"
      overflow="scroll"
      display="flex"
      flexDirection="column"
      alignItems="top"
    >
      {tableNames}
    </Box>
  )
}