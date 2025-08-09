import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import ListView from './components/ListView';

function App() {
  const [listValues, setListValues] = useState([]);

  const handleAddValue = (newValue) => {
    if (newValue > 0 && !listValues.includes(newValue)) {
      setListValues((prevValues) => [...prevValues, newValue]);
    }
  };

  const handleSortList = (sortOrder) => {
    const sortedValues = [...listValues].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a - b;
      } else {
        return b - a;
      }
    });
    setListValues(sortedValues);
  };

  const handleResetList = () => {
    setListValues([]);
  };

  return (
    <div className="App">
      <h1 className="main-title">Custom Counter App</h1>
      <div className="container">
        <Counter onAddValue={handleAddValue} />
        <ListView
          listValues={listValues}
          onSort={handleSortList}
          onReset={handleResetList}
        />
      </div>
    </div>
  );
}

export default App;