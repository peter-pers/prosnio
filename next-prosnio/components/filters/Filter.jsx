const Filter = ({ name, label, value, options, onChange }) => {
  return (
    <select
      className="h-8"
      name={name}
      id={name}
      value={value}
      onChange={onChange}
    >
      <option disabled value="">
        {label}
      </option>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};
export default Filter;
