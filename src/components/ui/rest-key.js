export default function RestKey(props) {
  const { theme, value } = props;
  return (
    <input
      className={
        theme === 1
          ? "rest-key dark-blue"
          : theme === 2
          ? "rest-key dark-moderate-cyan"
          : theme === 3
          ? "rest-key dark-violet"
          : "rest-key"
      }
      readOnly
      value={value}
      onClick={() => props.clicked(value)}
    />
  );
}
