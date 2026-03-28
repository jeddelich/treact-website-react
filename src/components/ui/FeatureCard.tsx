function FeatureCard({ icon, title, para }: { icon: string; title: string; para: string }) {
  return (
    <div className="feature">
      <figure className="feature__img--wrapper">
        <img
          src={icon}
          alt=""
          className="feature__img"
        />
      </figure>
      <div className="feature__description">
        <h2 className="feature__title">{title}</h2>
        <p className="feature__para">{para}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
