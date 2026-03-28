function ValueCard({
  icon,
  title,
  para,
}: {
  icon: string;
  title: string;
  para: string;
}) {
  return (
    <div className="list__value">
      <div className="value__header">
        <figure className="value__icon--wrapper">
          <i className={icon}></i>
        </figure>
        <h3 className="value__title">{title}</h3>
      </div>
      <p className="value__para">{para}</p>
    </div>
  );
}

export default ValueCard;
