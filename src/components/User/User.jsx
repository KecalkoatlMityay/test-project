import { useNavigate, useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "../../shared/api/rtkApi";
import { useSelector } from "react-redux";
import { selectIsUserArchived } from "../../shared/store/archivedSlice/selectors/selectIsUserArchived";

const User = () => {
  const { userId } = useParams();
  const { data, isLoading, isError, error } = useGetUserByIdQuery(userId);
  const isArchived = useSelector(selectIsUserArchived(userId));
  const navigate = useNavigate();
  if (isLoading) {
    return <span>Данные загружаются</span>;
  }
  if (isError) {
    return <span>{JSON.stringify(error.message)}</span>;
  }
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Назад
      </button>
      {JSON.stringify(data)}
    </div>
  );
};

export default User;
