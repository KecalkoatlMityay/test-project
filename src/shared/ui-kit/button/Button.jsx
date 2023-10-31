import style from "./button.module.css";
import cls from "classnames";

export const Button = ({
  children,
  onClick,
  variant = "filled",
  type = "button",
}) => {
  const styleMapper = {
    filled: style.filled,
    simple: style.simple,
  };
  return (
    <button
      type={type}
      className={cls(style.button, styleMapper[variant])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
