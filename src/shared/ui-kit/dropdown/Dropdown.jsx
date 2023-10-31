import style from "./dropdown.module.css";

export const Dropdown = ({ items }) => {
  return (
    <div className={style.dropdown}>
      {items.map((item, index) => {
        return <span key={`${item.text}-${index}`} onClick={item.onClick}>{item.text}</span>;
      })}
    </div>
  );
};
