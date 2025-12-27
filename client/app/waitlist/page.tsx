"use client";

import { FaCaretLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import "./waitlist.css";

const Waitlist = () => {
  const router = useRouter();

  return (
    <div className="waitlist-wrapper">
      <button type="button" className="home" onClick={() => router.push("/")}>
        <FaCaretLeft className="back-icon" />
        <span>Back</span>
      </button>

      <section className="waitlist">
        <div className="head">
          <h2 className="heading">
            Document the journey. Celebrate the growth,with Prox.
          </h2>
          <p>
            Send messages, photos, and thoughts to your future self—delivered
            exactly when you need the reminder.
          </p>
        </div>
        <form className="waitlist-form">
          <input type="email" placeholder="nexon@prox.tech" />
          <button type="submit">Join waitlist</button>
        </form>
      </section>
    </div>
  );
};

export default Waitlist;
