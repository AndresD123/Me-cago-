import React from 'react';
import { ChevronRight } from 'lucide-react';
import BackToHomeButton from '../components/BackToHomeButton';
import ServiceImageModal from '../components/ServiceImageModal';
import { useServiceImageModal } from '../hooks/useServiceImageModal';

interface WroughtIronPageProps {
  onQuoteClick: () => void;
}

function WroughtIronPage({ onQuoteClick } :WroughtIronPageProps) {
  const { isOpen, openModal, closeModal } = useServiceImageModal();

  const handleImageClick = (index: number) => {
    openModal(images, index);
  };

  return (
    <div className="min-h-screen">
      <BackToHomeButton />
      <div className="relative h-[60vh]">
        <img
          src="/Images 3 /Barandilla Cristal (Hierro forjado ).jpeg"
          alt="Hierro Forjado"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hierro Forjado
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mb-6">
              Artesanía tradicional combinada con técnicas modernas para crear piezas únicas y duraderas
            </p>
            <button 
              onClick={onQuoteClick}
              className="md:hidden inline-flex items-center px-6 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors duration-300"
            >
              Cotizar
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                onClick={() => handleImageClick(index)}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-gray-600">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Maestros del Hierro Forjado
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nuestros artesanos combinan técnicas tradicionales de forja con métodos modernos para crear piezas únicas que destacan por su belleza y durabilidad.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Cada proyecto es una obra de arte única, diseñada y ejecutada con atención al más mínimo detalle, respetando tanto la estética tradicional como las necesidades contemporáneas.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Servicios Principales</h3>
                <ul className="space-y-3 text-black">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-amber-700 mr-2 flex-shrink-0 mt-1" />
                    <span>Puertas y portones ornamentales</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-amber-700 mr-2 flex-shrink-0 mt-1" />
                    <span>Barandillas y rejas decorativas</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-amber-700 mr-2 flex-shrink-0 mt-1" />
                    <span>Elementos arquitectónicos personalizados</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-amber-700 mr-2 flex-shrink-0 mt-1" />
                    <span>Restauración de piezas históricas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button 
                onClick={onQuoteClick}
                className="inline-flex items-center px-6 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors duration-300"
              >
                Cotizar
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ServiceImageModal
        images={images}
        initialIndex={0}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </div>
  );
}

const images = [
  {
    url: '/Images 3 /Barandilla Cristal (Hierro forjado ).jpeg',
    title: 'Barandilla con Cristal',
    description: 'Combinación elegante de hierro forjado y cristal para espacios modernos',
  },
  {
    url: '/Images 3 /Puerta ext (Hierro).jpeg',
    title: 'Puerta Exterior',
    description: 'Puerta robusta para exterior con acabados en hierro forjado',
  },
  {
    url: '/Images 3 /Barandilla 2 (Forja).jpeg',
    title: 'Barandilla Decorativa',
    description: 'Barandilla con elementos decorativos en hierro forjado',
  },
  {
    url: '/Images 3 /Horno (Hierro Forjado).jpeg',
    title: 'Estructura para Horno',
    description: 'Soporte de hierro forjado para horno tradicional',
  },
  {
    url: '/Images 3 /Puerta (Acero Forjado).jpeg',
    title: 'Puerta de Acero Forjado',
    description: 'Puerta de seguridad con elementos decorativos forjados',
  },
  {
    url: '/Images 3 /Puerta Hierro.jpeg',
    title: 'Puerta de Hierro',
    description: 'Puerta tradicional fabricada en hierro con acabado clásico',
  }
];

export default WroughtIronPage;