import {
  initializeBlock,
  useBase,
  useGlobalConfig,
} from '@airtable/blocks/ui';
import {
  Box,
  Button,
  Input,
  ConfirmationDialog,
} from '@airtable/blocks/ui';
import React from 'react';
import { Tables } from './components/table_list/tables';
import { SearchContainer } from './components/search_shortcuts/search_container';

function BaseBuilderApp() {
    const base = useBase();
    return (
      <Box
        border="none"
        borderRadius="default"
        backgroundColor="lightGray1"
        width="100%"
        overflow="hidden"
        display="flex"
        flexDirection="row"
        alignItems="top"
        justifyContent="left"
        height="100vh"
      >
        {Tables()}
        {SearchContainer()}
      </Box>
      
    );
}

initializeBlock(() => <BaseBuilderApp />);
