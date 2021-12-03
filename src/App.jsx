import React, { useState } from 'react';

import './styles/App.css';
import TestParagraph from './components/TestParagraph';
import Select from './components/Select';

const OPTIONS = [
  { label: 'Option 1', value: 0 },
  { label: 'Option 2', value: 1 },
  { label: 'Option 3', value: 2 },
  { label: 'Option 4', value: 3 },
  { label: 'Option 5', value: 4 },
  { label: 'Option 6', value: 5 },
];

const App = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className='root'>
      <div className='container'>
        <div className='yet-another-div-yaaaay'>
          <Select
            options={OPTIONS}
            value={selected}
            onChange={({ value }) => setSelected(value)}
          />
          <TestParagraph />
        </div>
      </div>
    </div>
  );
};

export default App;
