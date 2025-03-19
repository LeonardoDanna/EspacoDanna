import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    text: 'Melhor salão que já fui! Atendimento excelente e resultados incríveis.',
    rating: 5
  },
  {
    name: 'Ana Santos',
    text: 'Profissionais muito competentes e ambiente acolhedor. Recomendo!',
    rating: 5
  },
  {
    name: 'Carla Oliveira',
    text: 'Sempre saio satisfeita dos serviços. Preços justos e qualidade impecável.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <motion.section 
      className="py-16 bg-neutral-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          O que dizem nossos clientes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-yellow-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <p className="text-neutral-600 mb-4">{testimonial.text}</p>
              <p className="font-semibold text-neutral-800">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials; 