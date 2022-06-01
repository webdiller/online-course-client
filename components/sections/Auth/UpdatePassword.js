export default function UpdatePassword({
  handler,
  error,
  email,
  id,
  password, passwordSet,
  confirmPassword, confirmPasswordSet
}) {
  return (
    <div className="auth">
      <div className="container auth__container">
        <h1 className="auth__title">Сброс пароля для аккаунта</h1>
        <p className="text auth__text">Введите новый пароль для своего аккаунта</p>
        {error && <p className="text auth__error">{error}</p>}
        <form
          onSubmit={handler}
          className="auth__form">

          {/* <div className="auth__group ui-input">
            <label className="text ui-input__label">Новый пароль</label>
            <input onChange={(e) => passwordSet(e.target.value)} name="password" type="text" className="ui-input__field" />
          </div>*/}

          <div className="auth__group mb-3">
            <label className="form-label mb-0">Новый пароль</label>
            <input onChange={(e) => passwordSet(e.target.value)} name="password" type="text" className="form-control" />
          </div>

          {/* <div className="auth__group ui-input">
            <label className="text ui-input__label">Подтвердите новый пароль</label>
            <input onChange={(e) => confirmPasswordSet(e.target.value)} name="confirmPassword" type="text" className="ui-input__field" />
          </div>  */}

          <div className="auth__group mb-3">
            <label className="form-label mb-0">Подтвердите пароль</label>
            <input onChange={(e) => confirmPasswordSet(e.target.value)} name="confirmPassword" type="text" className="form-control" />
          </div>
          <button className="btn btn-outline-primary auth__submit">Подтвердить</button>
        </form>
      </div>
    </div>
  )
}
