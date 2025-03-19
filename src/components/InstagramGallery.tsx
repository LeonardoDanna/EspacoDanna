import { motion } from 'framer-motion';

const InstagramGallery = () => {
  const images = [
    '/IMG_2358.JPG',
    '/IMG_2461.JPG',
    '/IMG_2312.JPG',
    '/IMG_2363.JPG',
    '/IMG_2333.JPG',
    '/IMG_2376.JPG',
  ];

  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-3 gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="aspect-square overflow-hidden rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.img
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
            width={400}
            height={400}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default InstagramGallery;