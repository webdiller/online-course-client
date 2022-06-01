import Link from "next/link";
import { useRouter } from "next/router";

export default function AdminNav() {
  const router = useRouter()
  const currentPath = router.asPath
  return (
    <div className="admin-nav">
      <nav className="container admin-nav__container">
        {/* <Link href="/admin"><a className={currentPath === '/admin' ? "text admin-nav__item active" : "text admin-nav__item"}>Главная</a></Link> */}
        <Link href="/admin/products"><a className={currentPath === '/admin/products' ? "text admin-nav__item active" : "text admin-nav__item"}>Все курсы</a></Link>
        <Link href="/admin/products/add"><a className={currentPath === '/admin/products/add' ? "text admin-nav__item active" : "text admin-nav__item"}>Добавить курс</a></Link>
      </nav>
    </div>
  )
}
