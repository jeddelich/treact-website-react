import Link from "../ui/Link";
import Modal from "../ui/Modal";

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
            <Link
              href="#quality-work"
              linkName="About"
              itemClass="nav__link"
              linkClass="nav__link--anchor"
              underline="nav__link--underline"
            />
            <Link
              linkName="Blog"
              status="not-working"
              itemClass="nav__link"
              linkClass="nav__link--anchor"
              underline="nav__link--underline"
            />
            <Link
              href="#pricing"
              linkName="Pricing"
              itemClass="nav__link"
              linkClass="nav__link--anchor"
              underline="nav__link--underline"
            />
            <Link
              linkName="Contact Us"
              status="not-working"
              itemClass="nav__link"
              linkClass="nav__link--anchor"
              underline="nav__link--underline"
            />
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
          <button className="button__menu" onClick={openMenu}>
            <i className="fa-solid fa-bars" onClick={openMenu}></i>
          </button>
          <Modal closeMenu={closeMenu} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
