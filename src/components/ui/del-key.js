export default function DelKey(props) {
  const { theme, value } = props;
  return (
    <input
      className={
        theme === 1
          ? "del-key dark-blue"
          : theme === 2
          ? "del-key dark-moderate-cyan"
          : theme === 3
          ? "del-key dark-violet"
          : "del-key"
      }
      readOnly
      value={value}
    />
  );
}
