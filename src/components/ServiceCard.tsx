import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <h3 className="text-xl font-bold mb-2 text-neutral-800">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;