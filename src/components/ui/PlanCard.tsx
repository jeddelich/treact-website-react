import { motion } from "framer-motion";

function PlanCard({
  title,
  price,
  subscription,
  targetAudience,
  highlights,
}: {
  title: string;
  price: string;
  subscription: string;
  targetAudience: string;
  highlights: string[];
}) {
  return (
    <motion.div
      className="pricing__list--plan"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="plan__stripe"></div>
      <div className="list__plan--top-half">
        <h3 className="plan__title">{title}</h3>
        <div className="plan__price">{price}</div>
        <div className="plan__period">{subscription}</div>
      </div>
      <hr className="pricing__line--break" />
      <div className="list__plan--bottom-half">
        <div className="plan__target-audience">{targetAudience}</div>
        <ul className="plan__highlights">
          {highlights.map((highlight, index) => (
            <li key={index} className="plan__highlight">{highlight}</li>
          ))}
        </ul>
      </div>
      <hr className="pricing__line--break" />
      <button className="plan__button not-working">Buy Now</button>
    </motion.div>
  );
}

export default PlanCard;
