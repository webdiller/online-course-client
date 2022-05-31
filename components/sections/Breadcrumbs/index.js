import Link from "next/link";
import { useRouter } from "next/router"

export default function Breadcrumbs({ routes, productId, productName }) {
  const router = useRouter();

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb my-3">
              {routes(productId, productName).map(({ route, pageName }) => {
                const isCurrent = router.asPath == route ? true : false;
                return (
                  <li className={isCurrent ? "breadcrumb-item active" : "breadcrumb-item"} key={route}>
                    {isCurrent ? (<>{pageName}</>) : (<Link href={route}><a>{pageName}</a></Link>)}
                  </li>
                )
              })}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  )
}