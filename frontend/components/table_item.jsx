import React from "react";
import {
  Box,
  Icon,
  Text
} from '@airtable/blocks/ui';

export function TableItem({table}) {
  return (
    <Box
      border="thick"
      borderRadius="default"
      backgroundColor="lightGray1"
      padding={2}
      width="100%"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="left"
    >
      <Icon name="grid" size={16} margin="5px" />
      <Text key={table.id}>{table.name}</Text>
    </Box>
  )
}