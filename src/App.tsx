import { Instagram, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceCard from './components/ServiceCard';
import InstagramGallery from './components/InstagramGallery';
import WhatsAppButton from './components/WhatsAppButton';
import Navigation from './components/Navigation';
import Testimonials from './components/Testimonials';
import LocationMap from './components/LocationMap';

function App() {
  const services = [
    {
      title: 'Cabelos',
      description: 'Corte, hidratação, coloração, mechas, progressivas e químicas em geral',
    },
    {
      title: 'Unhas',
      description: 'Manicure tradicional, alongamento em gel, blindagem, banho de gel',
    },
    {
      title: 'Depilação',
      description: 'Pernas, virilha, axila',
    },
    {
      title: 'Sobrancelhas',
      description: 'Design personalizado com henna',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />
      
      {/* Hero Section */}
      <header id="home" className="relative h-[90vh] bg-cover bg-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/IMG_2338.JPG")',
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Espaço Danna
          </motion.h1>
          <motion.p 
            className="text-xl md:text-3xl mb-8 text-center max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transformando você a cada visita com excelência e carinho.
          </motion.p>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <WhatsAppButton />
          </motion.div>
        </div>
      </header>

      {/* Info Section */}
      <motion.section 
        className="py-12 px-4 md:px-8 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: 'Endereço', text: 'Rua Mogi Guaçu, 1291' },
              { icon: Phone, title: 'Contato', text: '(19) 97817-6589' },
              { icon: Clock, title: 'Funcionamento', text: 'Ter - Sab | 08:00 - 18:00' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="flex items-center space-x-4 p-4 bg-neutral-50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <item.icon className="w-6 h-6 text-rose-500" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
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
            Onde estamos
          </motion.h2>
          <motion.p 
            className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Venha nos visitar e transforme seu visual
          </motion.p>
          <LocationMap />
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        id="services" 
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            {...fadeInUp}
          >
            Nossos serviços
          </motion.h2>
          <motion.p 
            className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto"
            {...fadeInUp}
          >
            Cuidados especializados para realçar sua beleza natural
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Instagram Gallery */}
      <motion.section 
        id="gallery" 
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div 
            className="flex items-center justify-center space-x-2 mb-12"
            {...fadeInUp}
          >
            <Instagram className="w-6 h-6" />
            <h2 className="text-3xl font-bold">Galeria de fotos</h2>
          </motion.div>
          <InstagramGallery />
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <motion.footer 
        className="bg-neutral-900 text-white py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Espaço Danna',
                description: 'Transformando vidas através da beleza e do bem-estar.',
                links: [
                  { href: 'https://www.instagram.com/espacod.campinas/?hl=pt-br', icon: Instagram },
                  { href: 'https://wa.me/5519978176589?text=Olá, gostaria de agendar um horário no salão!', icon: MessageCircle }
                ]
              },
              {
                title: 'Horário de Funcionamento',
                items: ['Terça - Sábado', '08:00 - 18:00']
              },
              {
                title: 'Contato',
                items: ['Rua Mogi Guaçu, 1291', '(19) 97817-6589']
              }
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                {section.description && (
                  <p className="text-neutral-400 mb-4">{section.description}</p>
                )}
                {section.links && (
                  <div className="flex space-x-4">
                    {section.links.map((link) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-rose-500 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <link.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                )}
                {section.items && (
                  <div>
                    {section.items.map((item) => (
                      <p key={item} className="text-neutral-400">{item}</p>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>&copy; {new Date().getFullYear()} Espaço Danna. Todos os direitos reservados.</p>
            <p className="mt-2">
              Feito por{' '}
              <motion.a 
                href="https://www.linkedin.com/in/leonardo-danna/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-rose-500 hover:text-rose-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Leonardo Danna
              </motion.a>
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;