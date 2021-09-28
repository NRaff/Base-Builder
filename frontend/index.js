import {
  initializeBlock,
  useBase,
  useGlobalConfig,
  Button,
  Input,

} from '@airtable/blocks/ui';
import React, {useState} from 'react';

function BaseBuilderApp() {
    // YOUR CODE GOES HERE
    const base = useBase();
    return (
      SetTable()
      // <div>
      //   Hello world 🚀
      // </div>
    );
}

function SetTable() {
  const [value, setValue] = useState("");
  return (
    <div 
      style = {{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 18,
        padding: 12,
        borderBottom: '1px solid #ddd',
      }}
    >
    <Input
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder="Add your table's name..."
      size="large"
      width="50%"
    />
    </div>
  )
}

initializeBlock(() => <BaseBuilderApp />);
