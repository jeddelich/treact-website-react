import Link from "../ui/Link";

function Navbar() {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        <div className="row nav__row">
          <div className="nav__logo--pair">
            <figure className="logo__img--wrapper">
              <img
                className="logo__img"
                src="https://module-2-fp-example-website.vercel.app/assets/logo.2c489fc453a1783cbadacf914efa3df6.svg"
                alt="Treact Logo"
              />
            </figure>
            <div className="nav__logo--title">Treact</div>
          </div>
          <ul className="nav__list">
            <Link href="#quality-work" linkName="About" />
            <Link linkName="Blog" disabled="not-working" />
            <Link href="#pricing" linkName="Pricing" />
            <Link linkName="Contact Us" disabled="not-working" />
          </ul>
          <ul className="nav__members">
            <li className="nav__link--login">
              <a className="nav__link--anchor not-working"> Login </a>
              <div className="nav__link--underline-2"></div>
            </li>
            <li className="nav__link">
              <button className="nav__button--sign-up not-working">
                <a className="nav__link--anchor nav__link--primary not-working">
                  Sign Up
                </a>
              </button>
            </li>
          </ul>
          <button className="button__menu">
            <i className="fa-solid fa-bars" onClick={openMenu}></i>
          </button>
          <div className="menu__backdrop">
            <button
              className="button__menu button__menu--close"
              onClick={closeMenu}
            >
              <i className="fa-solid fa-times"></i>
            </button>
            <ul className="menu__links">
              <li className="menu__list">
                <a
                  href="#quality-work"
                  className="menu__list--link"
                  onClick={closeMenu}
                >
                  About
                </a>
              </li>
              <li className="menu__list">
                <a className="menu__list--link not-working">Blog</a>
              </li>
              <li className="menu__list">
                <a
                  href="#pricing"
                  className="menu__list--link"
                  onClick={closeMenu}
                >
                  Pricing
                </a>
              </li>
              <li className="menu__list">
                <a className="menu__list--link not-working">Contact Us</a>
              </li>
              <li className="menu__list">
                <a className="menu__list--link not-working">Login</a>
              </li>
              <li className="menu__list">
                <a className="menu__list--link menu__link--primary not-working">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;