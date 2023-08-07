export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentageItem = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentageItem === 100
          ? "You got everything! Ready to go ✈"
          : `💼 You have ${numItems} items on your list, and you already packed ${numPacked}
           (${percentageItem ? percentageItem : 0}%)`}
      </em>
    </footer>
  );
}
