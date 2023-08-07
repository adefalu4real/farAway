export default function Items({ item, onDeleteItems, onToggleItem }) {
  // console.log(typeof item);
  return (
    <>
      <li>
        <input
          type="checkbox"
          value={item.id}
          onChange={() => onToggleItem(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItems(item.id)}>❌</button>
      </li>
    </>
  );
}
