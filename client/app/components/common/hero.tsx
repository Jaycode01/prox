import "./hero.css";
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
      </div>
      <svg width="200" height="150" viewBox="0 0 200 150">
        {/* Curved line */}
        <path
          d="M 150 20 Q 100 50, 50 120"
          stroke="#000"
          strokeWidth="3"
          fill="none"
        />

        {/* Arrow head */}
        <path
          d="M 50 120 L 45 105 M 50 120 L 65 115"
          stroke="#000"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </section>
  );
};

export default Hero;
