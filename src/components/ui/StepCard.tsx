import { motion } from "framer-motion";

function StepCard({ number, title, para }: { number: string; title: string; para: string }) {
  return (
    <motion.div
      className="list__step"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="list__step--number">{number}</div>
      <div className="step__description">
        <h4 className="step__title">{title}</h4>
        <p className="list__step--para">{para}</p>
      </div>
    </motion.div>
  );
}

export default StepCard;
