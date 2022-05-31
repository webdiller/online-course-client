import Link from "next/link";

export default function Waiting() {
  return (
    <div className="auth">
      <div className="container auth__container">
        <h1 className="auth__title">Проверьте почту для сброса пароля</h1>
        <form className="auth__form">
          <Link href={`/`}><a className="btn btn-outline-primary auth__submit">На главную</a></Link>
        </form>
      </div>
    </div>
  )
}
