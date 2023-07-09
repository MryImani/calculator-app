export default function EqualKey(props) {
  const { theme, value } = props;
  return (
    <input
      className={
        theme === 1
          ? "equal-key red"
          : theme === 2
          ? "equal-key orange"
          : theme === 3
          ? "equal-key pure-cyan"
          : "equal-key"
      }
      readOnly
      value={value}
    />
  );
}
