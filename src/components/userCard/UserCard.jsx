import { Avatar } from "../../shared/ui-kit/avatar/Avatar";
import {setIsHidden, toggleIsArchived} from "../../store/archivedSlice/archivedAndHiddenSlice";
import style from "./userCard.module.css";
import { DotsIcon } from "../../shared/ui-kit/icons/DotsIcon";
import { useMemo, useState } from "react";
import cls from "classnames";
import { Dropdown } from "../../shared/ui-kit/dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { selectIsUserArchived } from "../../store/archivedSlice/selectors/selectIsUserArchived";

export const UserCard = ({ user }) => {
  const [isUserMenuOpened, setIsUserMenuOpened] = useState(false);
  const toggleIsUserMenuOpened = () => {
    setIsUserMenuOpened(!isUserMenuOpened);
  };

  const dispatch = useDispatch();
  const setArchived = (id) => {
    dispatch(toggleIsArchived(id));
  };
  const setHidden = (id) => {
    dispatch(setIsHidden(id));
  }
  const {
    username,
    address: { city },
    company,
  } = user;

  const navigate = useNavigate();
  const isArchived = useSelector(selectIsUserArchived(user.id));
  const items = useMemo(() => {
    let dropdownItems = [
      {
        text: isArchived ? "Активировать" : "Архивировать",
        onClick: () => {
          setArchived(user.id);
        },
      },
    ];
    if (!isArchived) {
      dropdownItems.unshift({
        text: "Редактировать",
        onClick: () => {
          navigate(`${user.id}`);
        },
      });
      dropdownItems.push({
        text: "Скрыть",
        onClick: () => {
            setHidden(user.id);
        },
      });
    }
    return dropdownItems;
  }, [isArchived, user.id, navigate]);
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
