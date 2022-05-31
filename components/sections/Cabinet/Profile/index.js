import UseLogout from "hooks/UseLogout"
import { useAuthStore } from "@/store/auth";
import { useProfileStore } from "@/store/profile";
import { useEffect } from "react";

export default function Profile() {

  const { userId, isAuth, authSet, authLoading } = useAuthStore(state => state)
  const {
    userName, userNameSet,
    userEmail, userEmailSet,
    userCity, userCitySet,
    userStreet, userStreetSet,
    userPostCode, userPostCodeSet,
    userPhone, userPhoneSet,
    userCurrentPassword, userCurrentPasswordSet,
    userNewPassword, userNewPasswordSet,

    getProfile,
    updateInfo,
    resetPassword
  } = useProfileStore(state => state)

  const { userLoading, handler: handlerLogout } = UseLogout();

  useEffect(() => {
    getProfile(userId)
  }, [getProfile, userId])

  return (
    <div className="profile">
      <div className="container profile__container">

        <form onSubmit={(e) => resetPassword(e, userId)} className="profile__form">
          <div className="profile__form-section">
            <h3 className="profile__form-section-title mb-2">Сменить пароль</h3>

            <div className="profile__form-group mb-3">
              <input onChange={e => userCurrentPasswordSet(e.target.value)} type="password" placeholder="Текущий пароль" className="form-control" />
            </div>

            <div className="profile__form-group mb-3">
              <input onChange={e => userNewPasswordSet(e.target.value)} type="password" placeholder="Новый пароль" className="form-control" />
            </div>

            <button id="contactData" type="submit" className="btn btn-outline-primary profile__form-btn">Сменить пароль</button>
          </div>
        </form>

        <form onSubmit={(e) => updateInfo(e, userId)} className="profile__form">
          <div className="profile__form-section">
            <h3 className="profile__form-section-title mb-2">Основные данные профиля</h3>

            {/* <div className="profile__form-group ui-input">
              <label className="text ui-input__label">Email</label>
              <input readOnly defaultValue={userEmail} type="text" className="ui-input__field" />
            </div> */}
            <div className="profile__form-group mb-3">
              <input readOnly defaultValue={userEmail} type="email" placeholder="Email" className="form-control" />
            </div>

            {/* <div className="profile__form-group ui-input">
              <label className="text ui-input__label">ФИО</label>
              <input onChange={e => userNameSet(e.target.value)} defaultValue={userName} type="text" className="ui-input__field" />
            </div> */}
            <div className="profile__form-group mb-3">
              <input onChange={e => userNameSet(e.target.value)} defaultValue={userName} type="text" placeholder="ФИО" className="form-control" />
            </div>

            {/* <div className="profile__form-group ui-input">
              <label className="text ui-input__label">Город</label>
              <input onChange={e => userCitySet(e.target.value)} defaultValue={userCity} type="text" className="ui-input__field" />
            </div> */}
            <div className="profile__form-group mb-3">
              <input onChange={e => userCitySet(e.target.value)} defaultValue={userCity} type="text" placeholder="Город" className="form-control" />
            </div>

            {/* <div className="profile__form-group ui-input">
              <label className="text ui-input__label">Улица</label>
              <input onChange={e => userStreetSet(e.target.value)} defaultValue={userStreet} type="text" className="ui-input__field" />
            </div> */}
            <div className="profile__form-group mb-3">
              <input onChange={e => userStreetSet(e.target.value)} defaultValue={userStreet} type="text" placeholder="Улица" className="form-control" />
            </div>

            {/* <div className="profile__form-group ui-input">
              <label className="text ui-input__label">Почтовый индекс</label>
              <input onChange={e => userPostCodeSet(e.target.value)} defaultValue={userPostCode} type="text" className="ui-input__field" />
            </div> */}
            <div className="profile__form-group mb-3">
              <input onChange={e => userPostCodeSet(e.target.value)} defaultValue={userPostCode} type="text" placeholder="Почтовый индекс" className="form-control" />
            </div>

            {/* <div className="profile__form-group ui-input">
              <label className="text ui-input__label">Телефон</label>
              <input onChange={e => userPhoneSet(e.target.value)} defaultValue={userPhone} type="text" className="ui-input__field" />
            </div> */}
            <div className="profile__form-group mb-3">
              <input onChange={e => userPhoneSet(e.target.value)} defaultValue={userPhone} type="text" placeholder="Телефон" className="form-control" />
            </div>

            <button type="submit" className="btn btn-outline-primary profile__form-btn">Сохранить данные профиля</button>

          </div>
        </form>

        <form onSubmit={e => handlerLogout(e)} className="profile__form">
          <button type="submit" className="btn btn-outline-danger">Выйти из аккаунта</button>
        </form>
      </div>
    </div>
  )
}

