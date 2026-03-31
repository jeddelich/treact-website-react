import { motion } from "framer-motion";

function FeatureCard({ icon, title, para }: { icon: string; title: string; para: string }) {
  return (
    <motion.div
      className="feature"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
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
    </motion.div>
  );
}

export default FeatureCard;
