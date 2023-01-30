import { Container } from './styles'

export function Input({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) {
  return (
    <Container>
      <label htmlFor={id}> {label}</label>

      <input
        type={type}
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
      />
      {error && <p>{error}</p>}
    </Container>
  );
}