import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import abdo from "./style.module.css";

function Subscription() {
  return (
    <>
      <section>
        <div className={`${abdo.plan} ${abdo.view}`} id="plan">
          <div className={abdo.main}>
            <h2>
              <span>O</span>ur <span>M</span>embership <span>P</span>lan
            </h2>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
          </div>
          <div className={abdo.content}>
            <div className={abdo.frame}>
              <div className={abdo.box}>
                <h3 className={abdo.title}>Basic</h3>
                <h3 className={abdo.price}>
                  $ 10<span>|Mo</span>
                </h3>
                <h3 className={abdo.month}>3 Months</h3>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCheck} /> Wieght Lifting
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} />
                    Cardio
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} />
                    Training
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} />
                    Yoga
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} />
                    Protein Powder
                  </li>
                </ul>
              </div>
              <a href="#">Explore</a>
            </div>
            <div className={abdo.frame}>
              <div className={abdo.box}>
                <h3 className={abdo.title}>Standerd</h3>
                <h3 className={abdo.price}>
                  $ 20<span>|Mo</span>
                </h3>
                <h3 className={abdo.month}>6 Months</h3>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCheck} />
                    Wieght Lifting
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} />
                    Cardio
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} />
                    Training
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} />
                    Yoga
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} />
                    Protein Powder
                  </li>
                </ul>
              </div>
              <a href="#">Explore</a>
            </div>
            <div className={abdo.frame}>
              <div className={abdo.box}>
                <h3 className={abdo.title}>Premium</h3>
                <h3 className={abdo.price}>
                  $ 30<span>|Mo</span>
                </h3>
                <h3 className={abdo.month}>6 Months</h3>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCheck} />
                    Wieght Lifting
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} />
                    Cardio
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} />
                    Training
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} />
                    Yoga
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} />
                    Protein Powder
                  </li>
                </ul>
              </div>
              <a href="#">Explore</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Subscription;
