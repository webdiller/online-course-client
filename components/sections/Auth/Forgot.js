import Link from "next/link";

export default function Forgot({
  handler,
  setEmail,
  error,
}) {
  return (
    <div className="auth">
      <div className="container auth__container">
        <h1 className="auth__title">Восстановление пароля</h1>
        {error && <p className="text auth__error">{error}</p>}
        <form
          onSubmit={handler}
          className="auth__form">
          {/* <div className="auth__group ui-input">
            <label className="text ui-input__label">Почта</label>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Почта" type="email" className="ui-input__field" />
          </div> */}
          <div className="auth__group mb-3">
            <label htmlFor="exampleFormControlInput3" className="form-label">Почта от старого аккаунта</label>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Почта" type="email" className="form-control" id="exampleFormControlInput1" />
          </div>
          <button className="btn btn-outline-primary auth__submit">Восстановить пароль</button>

        </form>
        <Link href={`/auth/login`}><a className="auth__link">Уже есть аккаунт? Войти</a></Link>
      </div>
    </div>
  )
}
