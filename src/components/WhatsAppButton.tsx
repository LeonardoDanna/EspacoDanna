import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5519978176589?text=Olá, gostaria de agendar um horário no salão!"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MessageCircle className="w-5 h-5" />
      <span>Agende seu horário</span>
    </motion.a>
  );
};

export default WhatsAppButton;