const SearchBar = (props) => {
  return (
    <input
      className="h-8 w-96 rounded-3xl placeholder:p-4 text-black"
      type="text"
      placeholder="Search Phonefy"
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default SearchBar;
