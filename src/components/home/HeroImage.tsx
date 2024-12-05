import { motion } from 'framer-motion';
import heroImage from '../../assets/images/home/hero.jpg';

export const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <img 
        src={heroImage}
        alt="Professional Translator"
        className="rounded-lg shadow-xl"
      />
    </motion.div>
  );
};