import { useGetUsersQuery } from "../../shared/api/rtkApi";
import { UserCard } from "../userCard/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { setIsArchived } from "../../shared/store/archivedSlice/archivedSlice";
import { selectArchived } from "../../shared/store/archivedSlice/selectors/selectArchived";
import style from "./users.module.css";

const Users = () => {
  const archive = useSelector(selectArchived);
  const dispatch = useDispatch();
  const setArchived = (id) => {
    dispatch(setIsArchived(id));
  };

  const { data, error, isLoading, isError } = useGetUsersQuery();
  if (isLoading) {
    return <span>Данные загружаются</span>;
  }
  if (isError) {
    return <span>{JSON.stringify(error.message)}</span>;
  }

  const activeUsers = data.filter((user) => !archive.includes(user.id));
  const archivedUsers = data.filter((user) => archive.includes(user.id));
  return (
    <div>
      <span className={style.title}>Активные</span>
      <hr />
      <div className={style.userCards}>
        {activeUsers.map((user) => {
          return (
            <UserCard key={user.id} user={user} setArchived={setArchived} />
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
                <UserCard key={user.id} user={user} setArchived={setArchived} />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Users;
