import Link from "next/link";

export default function Welcome() {
  return (
    <div className="container p-0">
      <div className="row p-0">
        <div className="col-12 p-0">
          <div className="welcome">
            <div className="container welcome__container">
              <div className="welcome__content">
                <h1 className="welcome__title">
                  Покупайте курсы по сниженной цене
                </h1>
                <div className="text welcome__description">
                  Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Даль большой свою образ предупреждал, переписывается если себя имени которой.
                </div>
                <Link href="/"><a className="btn btn-lg btn-outline-primary welcome__link">Смотреть каталоги</a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
