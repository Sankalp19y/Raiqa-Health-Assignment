import React, { useState } from 'react';

function Counter({ onAddValue }) {
  const [currentValue, setCurrentValue] = useState(0);

  const increment = () => {
    setCurrentValue(currentValue + 1);
  };

  const decrement = () => {
    if (currentValue > 0) {
      setCurrentValue(currentValue - 1);
    }
  };

  const addToList = () => {
    if (currentValue > 0) {
      onAddValue(currentValue);
      setCurrentValue(0);
    }
  };

  return (
    <div className="card counter-section">
      <h3>Counter</h3>
      <div className="counter-controls">
        <button onClick={decrement}>-</button>
        <span className="counter-value">{currentValue}</span>
        <button onClick={increment}>+</button>
      </div>
      <button className="add-button" onClick={addToList}>
        Add to List
      </button>
    </div>
  );
}

export default Counter;