import UseLogout from "hooks/UseLogout"
import { useAuthStore } from "@/store/auth";
import { useProfileStore } from "@/store/profile";
import { useEffect, useState } from "react";

export default function Wallet() {

  const { userId, isAuth, authSet, authLoading } = useAuthStore(state => state)
  const {
    userBalance, updateBalance,
    getProfile,
    updateInfo,
  } = useProfileStore(state => state)

  const [selectBalance, selectBalanceSet] = useState(0)

  useEffect(() => {
    getProfile(userId)
  }, [getProfile, userId])

  return (
    <div className="profile">
      <div className="container profile__container">

        <form onSubmit={(e) => updateBalance(e, userId, selectBalance)} className="profile__form">
          <div className="profile__form-section">
            <p className="profile__form-section-title">Текущий баланс.........<b style={{ fontWeigth: 900 }}>{userBalance} руб.</b></p>
            <div className="profile__form-group ui-input">
              <label className="text ui-input__label">Введите сумму для добавления в кошелек</label>
              <input onChange={e => selectBalanceSet(e.target.value)} value={selectBalance} type="number" placeholder="руб." className="ui-input__field" />
            </div>
            <div className="ui-fast-balance">
              <div className="ui-fast-balance__container">
                <button onClick={()=>selectBalanceSet(500)} type="button" className="ui-fast-balance__item">500 р.</button>
                <button onClick={()=>selectBalanceSet(1000)} type="button" className="ui-fast-balance__item">1000 р.</button>
                <button onClick={()=>selectBalanceSet(5000)} type="button" className="ui-fast-balance__item">5000 р.</button>
              </div>
            </div>
            <br />
            <button id="contactData" type="submit" className="ui-link ui-link_black profile__form-btn">Добавить</button>
          </div>
        </form>
      </div>
    </div>
  )
}

