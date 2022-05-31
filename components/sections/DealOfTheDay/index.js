import Link from "next/link";

export default function DealOfTheDay() {
  return (
    <div className="deal-of-the-day">
      <div className="container deal-of-the-day__container">

        <div className="deal-of-the-day__content">
          <p className="title title_1 deal-of-the-day__title">Deal of the day</p>
          <p className="text deal-of-the-day__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
            eiusmod tempor incididunt ut labore et
          </p>
          <div className="deal-of-the-day__timer">
            <div className="deal-of-the-day__timer-item">
              <p className="deal-of-the-day__timer-title">03</p>
              <p className="text deal-of-the-day__timer-text">Day</p>
            </div>
            <div className="deal-of-the-day__timer-item">
              <p className="deal-of-the-day__timer-title">08</p>
              <p className="text deal-of-the-day__timer-text">Hour</p>
            </div>
            <div className="deal-of-the-day__timer-item">
              <p className="deal-of-the-day__timer-title">09</p>
              <p className="text deal-of-the-day__timer-text">Minute</p>
            </div>
          </div>
          <Link href="/"><a className="ui-link deal-of-the-day__link">SHOP NOW</a></Link>
        </div>
      </div>
    </div>
  )
}
