export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Start packing now</em>
      </footer>
    );

  const itemsAmount = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemsPacked / itemsAmount) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'Your good to go'
          : ` 🧳 You have ${itemsAmount} items on your list, and you already packed
        ${itemsPacked} ${percentage}%`}
      </em>
    </footer>
  );
}
