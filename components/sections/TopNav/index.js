import Link from "next/link";
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { GrMenu } from 'react-icons/gr';
import { CgCloseO } from 'react-icons/cg';
import { IoIosWallet } from 'react-icons/io';
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/auth";
import { useProfileStore } from "@/store/profile";

export default function TopNav() {
  const { isAuth, userEmail } = useAuthStore(state => state)
  const [activeMenu, activeMenuSet] = useState();

  const { basket } = useProfileStore(state => state)

  const [basketCount, basketCountSet] = useState(0)

  const activeMenuSetHandler = e => {
    activeMenuSet(prev => !prev)
  }

  useEffect(() => {
    if (basket) {
      basketCountSet(basket.userProducts.length)
    }
  }, [basket])

  return (
    <div className="bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-xl navbar-dark">
              <div className="container-fluid px-0">
                <Link href="/"><a className="navbar-brand">Онлайн курсы</a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul style={{ flex: "1 1 auto" }} className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link href="/catalog/premiere-pro"><a className="nav-link">Курсы Premiere Pro</a></Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/catalog/after-effects"><a className="nav-link">Курсы After Effects</a></Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/catalog/davinci-resolve"><a className="nav-link">Курсы цветокоррекции Davinci Resolve</a></Link>
                    </li>
                    <li className="nav-item dropdown">
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                    <li className="nav-item navbar__wallet">
                      {isAuth && (<Link href="/cabinet/cart"><a className="nav-link" tabIndex="-1" aria-disabled="true">Мои курсы</a></Link>)}
                    </li>
                    <li className="nav-item navbar__cabinet-login">
                      {!isAuth
                        ? (<Link href="/auth/login"><a className="nav-link" tabIndex="-1" aria-disabled="true">Войти</a></Link>)
                        : (<Link href="/cabinet"><a className="nav-link" tabIndex="-1" aria-disabled="true">Кабинет</a></Link>)
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
