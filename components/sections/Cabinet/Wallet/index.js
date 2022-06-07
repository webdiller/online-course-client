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
    <div className="wallet">
      <div className="container wallet__container">

        <form onSubmit={(e) => updateBalance(e, userId, selectBalance)} className="wallet__form">
          <div className="wallet__form-section">
            <h3 className="mb-3">Текущий баланс кошелька.........{userBalance} руб.</h3>

            <div className="wallet__form-group ui-input">
              <label className="form-label mb-0">Введите сумму для добавления в кошелек</label>
              <input onChange={e => selectBalanceSet(e.target.value)} value={selectBalance} type="number" placeholder="руб." className="form-control ui-input__field" />
            </div>

            <div className="ui-fast-balance">
              <div className="ui-fast-balance__container">
                <button onClick={()=>selectBalanceSet(500)} type="button" className="btn btn-outline-primary ui-fast-balance__item">500 р.</button>
                <button onClick={()=>selectBalanceSet(1000)} type="button" className="btn btn-outline-primary ui-fast-balance__item">1000 р.</button>
                <button onClick={()=>selectBalanceSet(5000)} type="button" className="btn btn-outline-primary ui-fast-balance__item">5000 р.</button>
              </div>
            </div>
            <br />
            <button type="submit" className="btn btn-outline-dark">Добавить сумму</button>
          </div>
        </form>
      </div>
    </div>
  )
}

