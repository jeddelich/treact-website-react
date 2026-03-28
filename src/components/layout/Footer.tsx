import footerLinks from "@/data/footerLinks";
import FooterColumn from "./FooterColumn";

function Footer() {
  return (
    <footer>
      <div className="row footer__row">
        <div className="footer__columns">
            {footerLinks.map((column) => (
                <FooterColumn key={column.title} title={column.title} links={column.links} />
            ))}
        </div>
        <hr className="footer__break" />
        <div className="footer__bottom">
          <div className="footer__branding">
            <img
              className="footer__logo"
              src="https://module-2-fp-example-website.vercel.app/assets/logo-light.d9a5d1b5be5ea077b26864fdfc2e96a4.svg"
              alt=""
            />
            <h5 className="footer__logo--text">Treact Inc.</h5>
          </div>
          <div className="footer__copyright">
            &copy; 2018 Treact Inc. All Rights Reserved.
          </div>
          <div className="footer__social-media">
            <div className="footer__icon--wrapper">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="footer__icon--wrapper">
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="footer__icon--wrapper">
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
