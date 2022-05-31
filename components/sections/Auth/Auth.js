import Link from "next/link";

export default function Auth({

  handler,
  setEmail,
  setPassword,
  error,

  title = "Регистрация",
  description,

  submitText = "Регистрация",

  innerLinkHref = "/auth/login",
  innerLinkTitle = "Уже есть аккаунт? Войти",

  innerLinkForgotHref = "",
  titleForgot = "Забыли данные для входа? Восстановить",

  emailLabel,
  passwordLabel,

  showForm = true
}) {
  return (
    <div className="auth">
      <div className="container auth__container">
        <h1 className="auth__title">{title}</h1>
        {description && <p className="text auth__text">{description}</p>}
        {showForm && (
          <form
            onSubmit={handler}
            className="auth__form">
            {emailLabel &&
              // <div className="auth__group ui-input">
              //   <label className="text ui-input__label">{emailLabel}</label>
              //   <input onChange={(e) => setEmail(e.target.value)} placeholder={emailLabel} type="email" className="ui-input__field" />
              // </div>
              <div className="auth__group mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">{emailLabel}</label>
                <input onChange={(e) => setEmail(e.target.value)} placeholder={emailLabel} type="email" className="form-control" id="exampleFormControlInput1" />
              </div>
            }
            {passwordLabel &&
              // <div className="auth__group ui-input">
              //   <label className="text ui-input__label">{passwordLabel}</label>
              //   <input onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" type="password" className="ui-input__field" />
              // </div>
              <div className="auth__group mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">{passwordLabel}</label>
                <input onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" type="password" className="form-control" id="exampleFormControlInput2" />
              </div>
            }
            <button className="btn btn-outline-primary auth__submit">{submitText}</button>
          </form>
        )}
        {error && <p className="text auth__error">{error}</p>}
        {innerLinkForgotHref && titleForgot && <Link href={innerLinkForgotHref}><a className="auth__link auth__link_forgot">{titleForgot}</a></Link>}
        {innerLinkHref && innerLinkTitle && <Link href={innerLinkHref}><a className="auth__link">{innerLinkTitle}</a></Link>}
      </div>
    </div>
  )
}
