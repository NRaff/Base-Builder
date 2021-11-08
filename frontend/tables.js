import React, { useState } from 'react';
import {
  useBase,
  Box,
  Icon,
  Text
} from '@airtable/blocks/ui';

export function Tables() {
  const base = useBase();
  const tableNames = base.tables.map((table, idx) => {
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
        alignItems="center"
        justifyContent="left"
        height="100%"
      >
        <Icon name="grid" size={16} margin="5px"/>
        <Text key={idx}>{table.name}</Text>
      </Box>
    )
  })

  return (
    <Box
      border="none"
      backgroundColor="lightGray3"
      padding={1}
      width={200}
      height="100%"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      alignItems="top"
      justifyContent="left"
    >
      {tableNames}
    </Box>
  )
}