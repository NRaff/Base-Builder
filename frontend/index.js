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
        padding={2}
        width="100%"
        overflow="hidden"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="left"
        onKeyPress={() => {
          console.log('key pressed')
        }}
      >
        {Tables()}
        {CreateSchema()}
      </Box>
      
    );
}

function SetTable() {
  const [value, setValue] = useState("");
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        padding: 12,
        borderBottom: '1px solid #ddd',
        width: '100%',
      }}
    >
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add your table's name..."
        size="large"
        width="100%"
      />
    </div>
  )
}

initializeBlock(() => <BaseBuilderApp />);
