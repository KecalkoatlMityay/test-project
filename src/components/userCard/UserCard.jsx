import { Button } from "../../shared/ui-kit/button/Button";
import { Avatar } from "../../shared/ui-kit/avatar/Avatar";
import style from "./userCard.module.css";
import { DotsIcon } from "../../shared/ui-kit/icons/DotsIcon";
import { useMemo, useState } from "react";
import cls from "classnames";
import { Dropdown } from "../../shared/ui-kit/dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsUserArchived } from "../../shared/store/archivedSlice/selectors/selectIsUserArchived";

export const UserCard = ({ user, setArchived }) => {
  const [isUserMenuOpened, setIsUserMenuOpened] = useState(false);
  const toggleIsUserMenuOpened = () => {
    setIsUserMenuOpened(!isUserMenuOpened);
  };
  const {
    username,
    address: { city },
    company,
  } = user;
  const navigate = useNavigate();
  const isArchived = useSelector(selectIsUserArchived(user.id));
  const items = useMemo(() => {
    let dropdowmItems = [
      {
        text: isArchived ? "Активировать" : "Архивировать",
        onClick: () => {
          setArchived(user.id);
        },
      },
    ];
    if (!isArchived) {
      dropdowmItems.unshift({
        text: "Редактировать",
        onClick: () => {
          navigate(`${user.id}`);
        },
      });
      dropdowmItems.push({
        text: "Скрыть",
        onClick: () => {
          console.log(user.id);
        },
      });
    }
    return dropdowmItems;
  }, [user, setArchived]);
  return (
    <div className={style.userCard}>
      <Avatar size={"medium"} isArchived={isArchived} />
      <div className={style.userData}>
        <div className={style.userTitle}>
          <span className={style.userName}>{username}</span>
          <DotsIcon
            className={cls(style.userMenu, {
              [style.isActive]: isUserMenuOpened,
            })}
            onClick={toggleIsUserMenuOpened}
          />
          {isUserMenuOpened && <Dropdown items={items} />}
        </div>
        <span className={style.companyName}>{company.name}</span>
        <span className={style.userCity}>{city}</span>
      </div>
    </div>
  );
};
