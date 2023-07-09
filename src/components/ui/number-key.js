export default function NumberKey(props){
    const {theme,value} = props;
    return (
      <input
        className={
          theme === 1
            ? "key grayish-orange dark-grayish-blue"
            : theme === 2
            ? "key grayish-yellow dark-grayish-yellow"
            : theme === 3
            ? "key grayish-magenta light-yellow"
            : "key"
        }
        readOnly
        value={value}
        onClick={() => props.clicked(value)}
      />
    );
}