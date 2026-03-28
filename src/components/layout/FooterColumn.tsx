import type { FooterLink } from "@/data/footerLinks";

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="footer__column">
      <div className="footer__column--title">{title}</div>
      {links.map((link) => (
        <div className="footer__column--link" key={link.name}>
          <a href={link.href} className={`footer__column--anchor ${link.status ?? ""}`}>{link.name}</a>
          <div className="footer__link--underline"></div>
        </div>
      ))}
    </div>
  );
}

export default FooterColumn;
