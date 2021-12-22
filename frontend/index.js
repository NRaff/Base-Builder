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
import React, {useState} from 'react';
import { Tables } from './components/tables';
import {CreateSchema} from './components/createSchema';

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
        {CreateSchema()}
      </Box>
      
    );
}

initializeBlock(() => <BaseBuilderApp />);
