import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <nav className="footer__nav">
          <Link href="/catalog/premiere-pro"><a className="footer__nav-item">Курсы Premiere Pro</a></Link>
          <Link href="/catalog/after-effects"><a className="footer__nav-item">Курсы After Effects</a></Link>
          <Link href="/catalog/davinci-resolve"><a className="footer__nav-item">Курсы цветокоррекции Davinci Resolve</a></Link>
        </nav>
      </div>
    </footer>
  )
}
