import React from "react";
import {
  Box,
  Text,
  Icon,
  Button,
} from '@airtable/blocks/ui';

const iconType = ({type}) => {
  switch(type) {
    case "Table":
      return "grid"
    case "Shortcut":
      return "bolt"
  }
}

export function SearchItem({cmd}) {
  return (
    <Box
      border="thick"
      borderRadius="default"
      backgroundColor="lightGray1"
      padding={1}
      width="100%"
      overflow="scroll"
      display="flex"
      alignItems="center"
      justifyContent="left"
      className="search-item"
      position="relative"
    >
      <Button
        width="100%"
        position="absolute"
        style={
          {backgroundColor: "transparent"}
        }
      >
      </Button>
      <Icon name={iconType(cmd)} size={16} margin="5px" />
      <Text>{cmd.name}</Text>
    </Box>
  )
}