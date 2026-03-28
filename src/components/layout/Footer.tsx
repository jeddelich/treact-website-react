import footerLinks from "@/data/footerLinks";
import FooterColumn from "./FooterColumn";
import IconButton from "../ui/IconButton";

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
            <IconButton wrapper="footer__icon--wrapper" icon="fa-brands fa-facebook-f" status="not-working" />
            <IconButton wrapper="footer__icon--wrapper" icon="fa-brands fa-twitter" status="not-working" />
            <IconButton wrapper="footer__icon--wrapper" icon="fa-brands fa-youtube" status="not-working" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
