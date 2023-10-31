import style from "./input.module.css";

export const Input = ({
  type = "text",
  label,
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      {label && <label htmlFor={`id-${id}`}>{label}</label>}
      <input
        type={type}
        className={style.input}
        id={`id-${id}`}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
