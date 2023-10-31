import { useGetUsersQuery } from "../../shared/api/rtkApi";
import {selectHidden} from "../../store/archivedSlice/selectors/selectHidden";
import { UserCard } from "../userCard/UserCard";
import { useDispatch, useSelector } from "react-redux";
import {toggleIsArchived, setIsHidden} from "../../store/archivedSlice/archivedAndHiddenSlice";
import { selectArchived } from "../../store/archivedSlice/selectors/selectArchived";
import style from "./users.module.css";

const Users = () => {
  const archiveIds = useSelector(selectArchived);
  const hiddenIds = useSelector(selectHidden)

  const { data, error, isLoading, isError } = useGetUsersQuery();
  if (isLoading) {
    return <span>Данные загружаются</span>;
  }
  if (isError) {
    return <span>{JSON.stringify(error.message)}</span>;
  }

  const activeUsers = data.filter((user) => !archiveIds.includes(user.id) && !hiddenIds.includes(user.id) );
  const archivedUsers = data.filter((user) => archiveIds.includes(user.id) && !hiddenIds.includes(user.id) );
  return (
    <div>
      <span className={style.title}>Активные</span>
      <hr />
      <div className={style.userCards}>
        {activeUsers.map((user) => {
          return (
            <UserCard key={user.id} user={user} />
          );
        })}
      </div>
      {!!archivedUsers.length && (
        <>
          <span className={style.title}>Архив</span>
          <hr />
          <div className={style.userCards}>
            {archivedUsers.map((user) => {
              return (
                <UserCard key={user.id} user={user} />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Users;
