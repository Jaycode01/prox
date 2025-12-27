import "./hero.css";
import { FaCaretUp } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <Image
          src="/images/hero.png"
          alt="-"
          className="hero-img"
          width={300}
          height={500}
        />

        <div className="main-content">
          <h1 className="heading">Send a message through time</h1>
          <p className="sub-heading">
            Document your struggles, your wins, your journey — then let your
            future self rediscover them. Simple. Personal. Unforgettable.
          </p>

          <button type="button">
            <span>Join Prox</span>
            <FaCaretUp className="caret-right" />
          </button>
        </div>

        <div className="preview-card">
          <div className="top">
            <input type="date" className="date-input" />
            <button type="button" className="option">
              <div>
                <Image
                  src="/icons/gmail.svg"
                  alt="gmail icon"
                  className="option-icon"
                  width={25}
                  height={25}
                />
                <span>Gmail</span>
              </div>
              <Image
                src="/icons/caret-up.svg"
                alt="caret up"
                width={18}
                height={18}
                className="dropdown-icon"
              />
            </button>
          </div>
          <div className="input-wrapper">
            <button type="button">
              <Image
                src="/icons/plus.svg"
                alt="plus icon"
                width={20}
                className="add-image-icon"
                height={20}
              />
            </button>

            <input type="text" placeholder="Dear 2026, did we make it?" />
          </div>
        </div>

        <div className="descriptive-words">
          <p className="wrong">Overwhelming</p>
          <p className="right">Simple</p>
        </div>

        <div className="earth-container">
          <Image
            src="/images/earth.png"
            width={100}
            height={100}
            alt="-"
            className="earth"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
