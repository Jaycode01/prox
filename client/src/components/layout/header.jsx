import "./header.css";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src="/images/prox.png" alt="defer logo" className="logo" />
      </a>
      <button type="button" className="instagram">
        <img src="/assets/instagram.svg" alt="instagram" />
      </button>
    </header>
  );
};

export default Header;
