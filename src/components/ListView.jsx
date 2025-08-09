import React, { useState } from 'react';
import ListItem from './ListItem';

function ListView({ listValues, onSort, onReset }) {
  const [sortOrder, setSortOrder] = useState('asc');

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    onSort(newSortOrder);
  };

  return (
    <div className="card list-section">
      <div className="list-header">
        <h3>Values List</h3>
        <div className="list-buttons">
          <button className="reset-button" onClick={onReset}>Reset</button>
          <button className="sort-button" onClick={toggleSortOrder}>
            Sort ({sortOrder === 'asc' ? 'Asc' : 'Desc'})
          </button>
        </div>
      </div>
      <ul className="values-list">
        {listValues.map((value, index) => (
          <ListItem key={index} value={value} />
        ))}
      </ul>
      <p className="total-count">Total items: {listValues.length}</p>
    </div>
  );
}

export default ListView;