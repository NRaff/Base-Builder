import {
  Box,
  useBase
} from '@airtable/blocks/ui'
import { SearchItem } from './search_item'
import React from 'react'

export function SearchResults({shortcuts}) {
  const allCmds = shortcuts.map((cmd) => {
    return (
      <SearchItem cmd={cmd} />
    )
  })
  return (
    <Box
      border="none"
      backgroundColor="lightGray3"
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
  )
}