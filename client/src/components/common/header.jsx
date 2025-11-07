import "./header.css";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src="/images/defer.png" alt="defer logo" />
      </a>
      <button type="button" className="instgram">
        <img src="/images/instagram" alt="instagram" />
      </button>
    </header>
  );
};

export default Header;
