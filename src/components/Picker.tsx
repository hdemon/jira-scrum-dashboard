const Picker = (props: any): any => {
  const { value, onChange, options } = props

  return (
    <span>
      <h1>{value}</h1>
      <select onChange={e => onChange(e.target.value)} value={value}>
        {options.map((option: any) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </span>
  )
}

export default Picker