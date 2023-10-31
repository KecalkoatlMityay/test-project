import style from "./avatar.module.css";
import cls from "classnames";
import avatarSrc from "../../assets/avatar.webp";

export const Avatar = ({ src, size, isArchived }) => {
  const sizeMapper = {
    small: style.small,
    medium: style.medium,
    big: style.big,
  };
  return (
    <img
      src={src || avatarSrc}
      alt="avatar"
      className={cls(style.avatar, sizeMapper[size], { [style.archived]: isArchived })}
    />
  );
};
