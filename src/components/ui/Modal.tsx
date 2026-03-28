import Link from "../ui/Link";

function Modal({ closeMenu }: { closeMenu: () => void }) {
  return (
    <div className="menu__backdrop">
      <div className="menu__overlay" onClick={closeMenu}></div>
      <div className="menu__panel">
        <button className="button__menu button__menu--close" onClick={closeMenu}>
          <i className="fa-solid fa-times"></i>
        </button>
        <ul className="menu__links">
          <Link
            href="#quality-work"
            itemClass="menu__list"
            linkClass="menu__list--link"
            linkName="About"
            onClick={closeMenu}
          />
          <Link
            itemClass="menu__list"
            linkClass="menu__list--link"
            linkName="Blog"
            status="not-working"
          />
          <Link
            href="#pricing"
            itemClass="menu__list"
            linkClass="menu__list--link"
            linkName="Pricing"
            onClick={closeMenu}
          />
          <Link
            itemClass="menu__list"
            linkClass="menu__list--link"
            linkName="Contact Us"
            status="not-working"
          />
          <Link
            itemClass="menu__list"
            linkClass="menu__list--link"
            linkName="Login"
            status="not-working"
          />
          <Link
            itemClass="menu__list"
            linkClass="menu__list--link menu__link--primary"
            linkName="Sign Up"
            status="not-working"
          />
        </ul>
      </div>
    </div>
  );
}

export default Modal;
