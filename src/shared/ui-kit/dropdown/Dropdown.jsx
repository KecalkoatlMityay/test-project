import style from "./dropdown.module.css";

export const Dropdown = ({ items }) => {
  console.log(items);
  return (
    <div className={style.dropdown}>
      {items.map((item) => {
        return <span onClick={item.onClick}>{item.text}</span>;
      })}
    </div>
  );
};
