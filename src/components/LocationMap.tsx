import { motion } from 'framer-motion';

const LocationMap = () => {
  return (
    <motion.div
      className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.7026475498797!2d-47.11931492374781!3d-22.92743737919354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c8b7c7e4a6ab%3A0x7f5f8e2ac8e60f02!2sR.%20Mogi%20Gua%C3%A7u%2C%201291%20-%20Jardim%20Nova%20Europa%2C%20Campinas%20-%20SP%2C%2013040-002!5e0!3m2!1spt-BR!2sbr!4v1709672577439!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>
  );
};

export default LocationMap; 