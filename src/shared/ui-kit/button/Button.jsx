import style from "./button.module.css";

export const Button = ({ title, onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      {title}
    </button>
  );
};
