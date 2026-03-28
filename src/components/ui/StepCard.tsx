function StepCard({ number, title, para }: { number: string; title: string; para: string }) {
  return (
    <div className="list__step">
      <div className="list__step--number">{number}</div>
      <div className="step__description">
        <h4 className="step__title">{title}</h4>
        <p className="list__step--para">{para}</p>
      </div>
    </div>
  );
}

export default StepCard;
