import { useNavigate, useParams } from "react-router-dom";
import {
  useGetUserByIdQuery,
  useUpdateUserDataMutation,
} from "../../shared/api/rtkApi";
import { useSelector } from "react-redux";
import { selectIsUserArchived } from "../../store/archivedSlice/selectors/selectIsUserArchived";
import { BackArrow } from "../../shared/ui-kit/icons/BackArrow";
import { Button } from "../../shared/ui-kit/button/Button";
import { Avatar } from "../../shared/ui-kit/avatar/Avatar";
import style from "./user.module.css";
import { Input } from "../../shared/ui-kit/input/Input";
import { useEffect, useState } from "react";
import { Modal } from "../../shared/ui-kit/modal/Modal";

const User = () => {
  const { userId } = useParams();
  const { data: user, isLoading, isError } = useGetUserByIdQuery(userId);
  const [updateUser, { isError: isUpdateError, isSuccess }] =
    useUpdateUserDataMutation();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [company, setCompany] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isArchived = useSelector(selectIsUserArchived(userId));
  const navigate = useNavigate();

  useEffect(() => {
    setName(user?.name);
    setUsername(user?.username);
    setEmail(user?.email);
    setCity(user?.address.city);
    setMobilePhone(user?.phone);
    setCompany(user?.company.name);
  }, [user]);

  const onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    updateUser({
      name,
      username,
      email,
      phone: mobilePhone,
      address: { ...user.address, city },
      company: { ...user.company, name: company },
    });
  };

  console.log(isSuccess);
  useEffect(() => {
    if (isSuccess) {
      setIsModalOpen(true);
    }
  }, [isSuccess]);

  if (isLoading) {
    return <span>Данные загружаются</span>;
  }
  if (isError || isUpdateError) {
    return <span>Произошла ошибка</span>;
  }
  return (
    <div>
      <header>
        <Button
          variant="simple"
          onClick={() => {
            navigate(-1);
          }}
        >
          <BackArrow />
          Назад
        </Button>
      </header>
      <section className={style.section}>
        <aside className={style.aside}>
          <Avatar size="big" />
          <div className={style.profileData}>
            <span>Данные профиля</span>

            <span>Рабочее пространство</span>

            <span>Приватность</span>

            <span>Безопасность</span>
          </div>
        </aside>
        <div className={style.userData}>
          <span className={style.userDataTitle}>Данные профиля</span>
          <hr />
          <form onSubmit={onSubmit} className={style.form}>
            <Input
              id="name"
              label="Имя"
              placeholder="Имя"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              id="nickname"
              label="Никнейм"
              placeholder="Никнейм"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Input
              id="email"
              label="Почта"
              placeholder="Почта"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              id="city"
              label="Город"
              placeholder="Город"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <Input
              id="mobilePhone"
              label="Телефон"
              placeholder="Телефон"
              value={mobilePhone}
              onChange={(e) => {
                setMobilePhone(e.target.value);
              }}
            />
            <Input
              id="companyName"
              label="Название компании"
              placeholder="Название компании"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
            <Button type="submit">Сохранить</Button>
          </form>
        </div>
      </section>
      {isModalOpen && <Modal setIsOpen={setIsModalOpen} />}
    </div>
  );
};

export default User;
