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
import { Tables } from './tables';
import {CreateSchema} from './createSchema';

function BaseBuilderApp() {
    // YOUR CODE GOES HERE
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
      >
        {Tables()}
        {CreateSchema()}
      </Box>
      
    );
}

initializeBlock(() => <BaseBuilderApp />);
