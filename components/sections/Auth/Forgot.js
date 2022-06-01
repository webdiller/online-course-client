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
          <div className="auth__group mb-3">
            <label className="form-label mb-0">Почта от старого аккаунта</label>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Почта" type="email" className="form-control" />
          </div>
          <button className="btn btn-outline-primary auth__submit">Восстановить пароль</button>

        </form>
        <Link href={`/auth/login`}><a className="auth__link">Уже есть аккаунт? Войти</a></Link>
      </div>
    </div>
  )
}
