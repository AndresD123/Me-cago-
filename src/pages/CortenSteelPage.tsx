import React from 'react';
import { ChevronRight } from 'lucide-react';
import BackToHomeButton from '../components/BackToHomeButton';
import ServiceImageModal from '../components/ServiceImageModal';
import { useServiceImageModal } from '../hooks/useServiceImageModal';

interface CortenSteelPageProps {
  onQuoteClick: () => void;
}

function CortenSteelPage({ onQuoteClick }: CortenSteelPageProps) {
  const { isOpen, openModal, closeModal } = useServiceImageModal();

  const handleImageClick = (index: number) => {
    openModal(images, index);
  };

  return (
    <div className="min-h-screen">
      <BackToHomeButton />
      <div className="relative h-[60vh]">
        <img
          src="/Images 3 /Puerta Peatonal (Corten).jpeg"
          alt="Chapa Corten"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Acabados en Chapa Corten
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mb-6">
              Diseños contemporáneos con la belleza natural del acero oxidado controlado
            </p>
            <button 
              onClick={onQuoteClick}
              className="md:hidden inline-flex items-center px-6 py-3 bg-orange-700 text-white rounded-md hover:bg-orange-800 transition-colors duration-300"
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
              Expertos en Acero Corten
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  El acero corten ofrece una combinación única de durabilidad y estética, con su característico acabado oxidado que protege el material y crea un aspecto distintivo.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Trabajamos este material versátil para crear desde elementos decorativos hasta soluciones arquitectónicas completas, siempre adaptándonos a las necesidades específicas de cada proyecto.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Servicios Principales</h3>
                <ul className="space-y-3 text-black">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-orange-700 mr-2 flex-shrink-0 mt-1" />
                    <span>Revestimientos y fachadas</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-orange-700 mr-2 flex-shrink-0 mt-1" />
                    <span>Elementos decorativos y esculturas</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-orange-700 mr-2 flex-shrink-0 mt-1" />
                    <span>Jardineras y mobiliario exterior</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-orange-700 mr-2 flex-shrink-0 mt-1" />
                    <span>Proyectos paisajísticos integrales</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button 
                onClick={onQuoteClick}
                className="inline-flex items-center px-6 py-3 bg-orange-700 text-white rounded-md hover:bg-orange-800 transition-colors duration-300"
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
    url: '/Images 3 /Puerta Peatonal (Corten).jpeg',
    title: 'Puerta Peatonal',
    description: 'Puerta de acceso con acabado en acero corten y diseño contemporáneo',
  },
  {
    url: '/Images 3 /Caja (Corten).jpeg',
    title: 'Caja Decorativa',
    description: 'Elemento decorativo fabricado en acero corten con acabado natural',
  },
  {
    url: '/Images 3 /Cuadros (Corten).jpeg',
    title: 'Marcos Decorativos',
    description: 'Conjunto de marcos en acero corten para decoración de interiores y exteriores',
  }
];

export default CortenSteelPage;