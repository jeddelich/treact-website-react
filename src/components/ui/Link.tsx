function Link({
  href,
  linkName,
  status,
  itemClass,
  linkClass,
  underline,
  onClick,
}: {
  href?: string;
  linkName: string;
  status?: string;
  itemClass?: string;
  linkClass?: string;
  underline?: string;
  onClick?: () => void;
}) {
  return (
    <li className={itemClass}>
      <a
        className={`${linkClass} ${status ? status : ""}`}
        href={href}
        onClick={onClick}
      >
        {" "}
        {linkName}{" "}
      </a>
      <div className={underline}></div>
    </li>
  );
}

export default Link;
