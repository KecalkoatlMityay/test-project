import { Outlet, useNavigate } from "react-router-dom";
import style from "./layout.module.css";
import { ReactComponent as LogoSign } from "../../assets/logo-sign.svg";
import { HeartIcon } from "../icons/HeartIcon";
import { BellIcon } from "../icons/BellIcon";
import { Avatar } from "../avatar/Avatar";
import avatarSrc from "../../assets/avatar.webp";

export const Layout = () => {
  const navigate = useNavigate();
  return (
    <section className={style.layout}>
      <header className={style.header}>
        <div
          onClick={() => {
            navigate("/");
          }}
          className={style.logo}
        >
          <LogoSign />
          <span className={style.logoText}>
            at-<strong>work</strong>
          </span>
        </div>
        <menu className={style.menu}>
          <HeartIcon />
          <BellIcon />
          <div className={style.user}>
            <Avatar src={avatarSrc} size={"small"} />
            <span>Ivan1234</span>
          </div>
        </menu>
      </header>
      <div className={style.outlet}>
        <Outlet />
      </div>
    </section>
  );
};
