import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiMenuAltLeft } from 'react-icons/bi';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function TopFilter() {
  const router = useRouter()
  const mostPopular = router.asPath.includes('mostPopular=true')
  const mostPrice = router.asPath.includes('mostPrice=true')

  return (
    <div className="top-filter">
      <div className="container top-filter__container">
        <p className='top-filter__menu'>Сортировать по:</p>
        <nav className="top-filter__sort">
          <Link href={{
            query: {
              skip: router.query.skip || 0,
              mostPrice: router.query.mostPrice == 'true' ? false : true
            }
          }}>
            <a className={mostPrice ? "top-filter__sort-item active" : "top-filter__sort-item"}>
              Цена
              <FiChevronDown />
            </a>
          </Link>
          <Link href={{
            query: {
              skip: router.query.skip || 0,
              mostPopular: router.query.mostPopular == 'true' ? false : true
            }
          }}>
            <a className={mostPopular ? "top-filter__sort-item active" : "top-filter__sort-item"}>
              Популярное
              <FiChevronDown />
            </a>
          </Link>


        </nav>
      </div>
    </div>
  )
}
