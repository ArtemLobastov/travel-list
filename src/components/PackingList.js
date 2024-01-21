import { useState } from 'react';
import Item from './Item';
export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems;

  switch (sortBy) {
    case 'input':
      sortedItems = items;
      break;
    case 'description':
      sortedItems = items.toSorted((a, b) =>
        a.description.localeCompare(b.description)
      );
      break;
    case 'packed':
      sortedItems = items.toSorted(
        (a, b) => Number(a.packed) - Number(b.packed)
      );
      break;
    default:
      sortedItems = items;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          name=""
          id=""
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sorts by input order</option>
          <option value="description">Sorts by description</option>
          <option value="packed">Sorts by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear</button>
      </div>
    </div>
  );
}
