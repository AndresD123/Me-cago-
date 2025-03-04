import React from 'react';
import { ChevronRight } from 'lucide-react';
import BackToHomeButton from '../components/BackToHomeButton';
import ServiceImageModal from '../components/ServiceImageModal';
import { useServiceImageModal } from '../hooks/useServiceImageModal';

interface ArtisticForgePageProps {
  onQuoteClick: () => void;
}

function ArtisticForgePage({ onQuoteClick }: ArtisticForgePageProps) {
  const { isOpen, openModal, closeModal } = useServiceImageModal();

  const handleImageClick = (index: number) => {
    openModal(images, index);
    
  };

  return (
    <div className="min-h-screen">
      <BackToHomeButton />
      <div className="relative h-[60vh]">
        <img
          src="/Images 3 /Puerta personalizada (Forja Artistica).jpeg"
          alt="Forja Artística"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Forja Artística
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mb-6">
              El arte de transformar el metal en obras únicas y expresivas
            </p>
            <button 
              onClick={onQuoteClick}
              className="md:hidden inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300"
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
              Arte en Metal
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nuestros artistas metalúrgicos combinan técnicas tradicionales con visión contemporánea para crear piezas únicas que trascienden lo funcional y se convierten en verdaderas obras de arte.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Cada proyecto es una oportunidad para explorar nuevas formas de expresión artística en metal, creando piezas que reflejan la personalidad y visión de nuestros clientes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Servicios Principales</h3>
                <ul className="space-y-3 text-black">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Esculturas metálicas personalizadas</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Elementos decorativos artísticos</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Restauración de obras artísticas</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Instalaciones artísticas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button 
                onClick={onQuoteClick}
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300"
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
    url: '/Images 3 /Puerta personalizada (Forja Artistica).jpeg',
    title: 'Puerta Personalizada',
    description: 'Puerta con diseño exclusivo y elementos decorativos artesanales',
  },
  {
    url: '/Images 3 /Mesa (Artistica).jpeg',
    title: 'Mesa Artística',
    description: 'Mesa decorativa con base de diseño artístico en metal',
  },
  {
    url: '/Images 3 /Silla (Artistica).jpeg',
    title: 'Silla Artística',
    description: 'Silla con estructura metálica y diseño personalizado',
  },
  {
    url: '/Images 3 /Hierro (Artistica).jpeg',
    title: 'Elemento de Hierro',
    description: 'Pieza artística fabricada en hierro con diseño único',
  },
  {
    url: '/Images 3 /Mesa acero (artistica).jpeg',
    title: 'Mesa de Acero',
    description: 'Mesa con estructura de acero y diseño contemporáneo',
  },
  {
    url: '/Images 3 /Escalera, barandilla cristal (Forja Artistica).jpeg',
    title: 'Escalera con Barandilla de Cristal',
    description: 'Combinación elegante de forja y cristal en escalera interior',
  }
];

export default ArtisticForgePage;