function Link({href, linkName, disabled}: {href?: string, linkName: string, disabled?: string}) {
  return (
    <li className="nav__link">
      <a className={`nav__link--anchor` + " " + (disabled ? disabled : "")} href={href}>
        {" "}
        {linkName}{" "}
      </a>
      <div className="nav__link--underline"></div>
    </li>
  );
}

export default Link;
