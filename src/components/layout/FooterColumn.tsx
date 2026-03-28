function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="footer__column">
      <div className="footer__column--title">{title}</div>
        {links.map((link) => (
      <div className="footer__column--link" key={link}>
        <a className="footer__column--anchor">{link}</a>
        <div className="footer__link--underline"></div>
      </div>
    ))}
    </div>
  );
}

export default FooterColumn;
