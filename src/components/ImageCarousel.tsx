import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const portfolioImages = [
  {
    url: '/Images 3 /Circulo Inox Despues (Acero Inox).jpeg',
    alt: 'Acero Inoxidable',
    title: 'Acabados en Acero Inoxidable',
    description: 'Diseño y fabricación de elementos decorativos con acabados de alta calidad'
  },
  {
    url: '/Images 3 /Puerta Peatonal (Corten).jpeg',
    alt: 'Puerta Corten',
    title: 'Puerta en Acero Corten',
    description: 'Diseño contemporáneo con la belleza natural del acero oxidado'
  },
  {
    url: '/Images 3 /Barandilla Cristal (Hierro forjado ).jpeg',
    alt: 'Barandilla con Cristal',
    title: 'Barandilla con Cristal',
    description: 'Combinación elegante de hierro forjado y cristal para espacios modernos'
  },
  {
    url: '/Images 3 /Exterior (estructuras arquitectonicas).jpeg',
    alt: 'Estructura Arquitectónica',
    title: 'Estructuras Arquitectónicas',
    description: 'Soluciones metálicas para proyectos arquitectónicos exteriores'
  },
  {
    url: '/Images 3 /Puerta personalizada (Forja Artistica).jpeg',
    alt: 'Puerta Artística',
    title: 'Forja Artística',
    description: 'Diseños personalizados que combinan funcionalidad y expresión artística'
  },
  {
    url: '/Images 3 /Escalera Hierro (Hierro Forjado).jpeg',
    alt: 'Escalera de Hierro',
    title: 'Escaleras de Hierro Forjado',
    description: 'Estructuras robustas con acabados tradicionales para interiores y exteriores'
  }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  useEffect(() => {
    // Precargar imágenes
    portfolioImages.forEach((image, index) => {
      const img = new Image();
      img.src = image.url;
      
      img.onload = () => {
        setImagesLoaded(prev => ({ ...prev, [index]: true }));
      };

      img.onerror = () => {
        console.error(`Error cargando imagen: ${image.url}`);
        setImageErrors(prev => ({ ...prev, [index]: true }));
      };
    });
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isAutoPlaying && !isDragging) {
      intervalId = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioImages.length);
      }, 5000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, isDragging]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setIsAutoPlaying(false);
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + portfolioImages.length) % portfolioImages.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const currentPosition = e.touches[0].clientX;
    const diff = dragStart - currentPosition;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        paginate(1);
      } else {
        paginate(-1);
      }
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const currentPosition = e.clientX;
    const diff = dragStart - currentPosition;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        paginate(1);
      } else {
        paginate(-1);
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  return (
    <div 
      className="relative w-full max-w-7xl mx-auto overflow-hidden bg-gray-100 rounded-xl"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => {
        setIsAutoPlaying(true);
        handleMouseLeave();
      }}
    >
      <div 
        className="aspect-[16/9] relative overflow-hidden rounded-xl shadow-lg"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0"
            style={{ touchAction: 'pan-y pinch-zoom' }}
          >
            <div className="relative w-full h-full">
              {imageErrors[currentIndex] ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <div className="text-center text-gray-500">
                    <AlertCircle className="w-12 h-12 mx-auto mb-2" />
                    <p>Error al cargar la imagen</p>
                  </div>
                </div>
              ) : (
                <>
                  {!imagesLoaded[currentIndex] && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  )}
                  <img
                    src={portfolioImages[currentIndex].url}
                    alt={portfolioImages[currentIndex].alt}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      imagesLoaded[currentIndex] ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading={currentIndex === 0 ? 'eager' : 'lazy'}
                  />
                </>
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {portfolioImages[currentIndex].title}
                </h3>
                <p className="text-gray-200 text-lg">
                  {portfolioImages[currentIndex].description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Botones de navegación */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              paginate(-1);
            }}
            className="w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-white rounded-full transition-all duration-300 text-gray-800 transform hover:scale-110 shadow-lg"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              paginate(1);
            }}
            className="w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-white rounded-full transition-all duration-300 text-gray-800 transform hover:scale-110 shadow-lg"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Contador de imágenes */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-gray-800 text-sm font-medium shadow-lg z-20">
          {currentIndex + 1} / {portfolioImages.length}
        </div>
      </div>

      {/* Navegación por puntos */}
      <div className="flex justify-center mt-4 gap-2 px-4">
        {portfolioImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-gray-800 w-4'
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>

      <div className="text-center mt-8 pb-4">
        <Link
          to="/proyectos"
          className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all duration-300 hover:scale-105 transform shadow-lg"
        >
          Ver Más Proyectos
          <ChevronRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default ImageCarousel;