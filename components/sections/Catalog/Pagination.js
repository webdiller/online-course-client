import Link from "next/link";
import { useRouter } from "next/router";

export default function Pagination({ router: routerLink, count }) {
  const router = useRouter();
  return (
    <div className="pagination">

      <div className="container pagination__container">
        {Array.from({ length: count / 10 }).map((el, indx, arr) => {
          return (
            <Link key={indx} href={`${routerLink}?skip=${indx * 10}`}>
              <a className="text pagination__item">{indx}</a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
