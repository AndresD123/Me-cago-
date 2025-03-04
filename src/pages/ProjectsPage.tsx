import React from 'react';
import BackToHomeButton from '../components/BackToHomeButton';
import ImageModal from '../components/ImageModal';
import { useImageModal } from '../hooks/useImageModal';

const projects = [
  // Acero Inoxidable
  {
    id: 'inox-ceiling',
    url: '/Proyec Images 2 /Techo inox.jpeg',
    title: 'Techo de Acero Inoxidable',
    description: 'Estructura de techo con acabado en acero inoxidable marino',
    category: 'Acero Inoxidable'
  },
  {
    id: 'inox-door',
    url: '/Proyec Images 2 /Puerta inox.jpeg',
    title: 'Puerta de Acero Inoxidable',
    description: 'Puerta moderna con acabado pulido espejo',
    category: 'Acero Inoxidable'
  },
  {
    id: 'inox-umbrella',
    url: '/Proyec Images 2 /Sombrilla inox.jpeg',
    title: 'Estructura para Sombrilla',
    description: 'Soporte en acero inoxidable para exterior con resistencia marina',
    category: 'Acero Inoxidable'
  },
  {
    id: 'inox-railing-1',
    url: '/Images/Inox/WhatsApp Image 2025-02-19 at 19.26.55 (1).jpeg',
    title: 'Barandilla Inoxidable',
    description: 'Barandilla moderna con acabado satinado',
    category: 'Acero Inoxidable'
  },
  {
    id: 'inox-detail',
    url: '/Images/Inox/WhatsApp Image 2025-02-19 at 19.24.33 (1).jpeg',
    title: 'Detalle Arquitectónico',
    description: 'Elemento decorativo en acero inoxidable pulido',
    category: 'Acero Inoxidable'
  },
  {
    id: 'inox-circle-after',
    url: '/Images 3 /Circulo Inox Despues (Acero Inox).jpeg',
    title: 'Círculo Decorativo - Después',
    description: 'Elemento circular en acero inoxidable con acabado pulido',
    category: 'Acero Inoxidable'
  },
  {
    id: 'inox-circle-before',
    url: '/Images 3 /Circulo inox antes  (Acero Inox).jpeg',
    title: 'Círculo Decorativo - Antes',
    description: 'Proceso de fabricación de elemento circular decorativo',
    category: 'Acero Inoxidable'
  },
  {
    id: 'inox-kitchen',
    url: '/Images 3 /Cocina (Acero Inox).jpeg',
    title: 'Elementos de Cocina',
    description: 'Acabados en acero inoxidable para espacios de cocina',
    category: 'Acero Inoxidable'
  },
  {
    id: 'inox-door-before',
    url: '/Images 3 /Puerta ext c Antes (Acero Inox).jpeg',
    title: 'Puerta Exterior - Antes',
    description: 'Proceso de renovación de puerta exterior en acero inoxidable',
    category: 'Acero Inoxidable'
  },
  {
    id: 'inox-door-after',
    url: '/Images 3 /Puerta ext c Despues (Acero Inox).jpeg',
    title: 'Puerta Exterior - Después',
    description: 'Resultado final de puerta exterior renovada en acero inoxidable',
    category: 'Acero Inoxidable'
  },
  {
    id: 'inox-floor-door',
    url: '/Images 3 /Puerta suelo (Acero Inox).jpeg',
    title: 'Puerta de Suelo',
    description: 'Acceso a sótano con acabado en acero inoxidable resistente',
    category: 'Acero Inoxidable'
  },
  {
    id: 'inox-floor-door-2',
    url: '/Images 3 /Puerta suelo2 (Inox).jpeg',
    title: 'Puerta de Suelo Integrada',
    description: 'Diseño de puerta de suelo que se integra con el pavimento',
    category: 'Acero Inoxidable'
  },
  {
    id: 'inox-ventilation',
    url: '/Images 3 /Ventilacion (Acero Inox).jpeg',
    title: 'Sistema de Ventilación',
    description: 'Rejilla de ventilación fabricada en acero inoxidable',
    category: 'Acero Inoxidable'
  },

  // Chapa Corten
  {
    id: 'corten-facade',
    url: '/Blog Images/Corten 2.jpeg',
    title: 'Fachada Corten',
    description: 'Revestimiento arquitectónico con paneles de acero corten',
    category: 'Chapa Corten'
  },
  {
    id: 'corten-shelf',
    url: '/Proyec Images 2 /Estanteria Corten.jpeg',
    title: 'Estantería Corten',
    description: 'Mueble decorativo con acabado oxidado natural',
    category: 'Chapa Corten'
  },
  {
    id: 'corten-door',
    url: '/Images/Corten/Puerta Corten .png',
    title: 'Puerta Corten',
    description: 'Puerta exterior con diseño contemporáneo',
    category: 'Chapa Corten'
  },
  {
    id: 'corten-garden',
    url: '/Images/Corten/Corten Exterior.jpeg',
    title: 'Jardín Corten',
    description: 'Integración de acero corten en paisajismo',
    category: 'Chapa Corten'
  },
  {
    id: 'corten-box',
    url: '/Images 3 /Caja (Corten).jpeg',
    title: 'Caja Decorativa',
    description: 'Elemento decorativo fabricado en acero corten',
    category: 'Chapa Corten'
  },
  {
    id: 'corten-frames',
    url: '/Images 3 /Cuadros (Corten).jpeg',
    title: 'Marcos Decorativos',
    description: 'Conjunto de marcos en acero corten para decoración de pared',
    category: 'Chapa Corten'
  },
  {
    id: 'corten-pedestrian-door',
    url: '/Images 3 /Puerta Peatonal (Corten).jpeg',
    title: 'Puerta Peatonal',
    description: 'Puerta de acceso peatonal con acabado en acero corten',
    category: 'Chapa Corten'
  },

  // Forja Artística
  {
    id: 'artistic-forge-1',
    url: '/Proyec Images 2 /Artistica 7 .jpeg',
    title: 'Forja Artística',
    description: 'Elemento decorativo con diseño personalizado',
    category: 'Forja Artística'
  },
  {
    id: 'artistic-element-2',
    url: '/Proyec Images 2 /Artistica 9 .jpeg',
    title: 'Elemento Artístico',
    description: 'Pieza decorativa con motivos tradicionales',
    category: 'Forja Artística'
  },
  {
    id: 'artistic-forge-3',
    url: '/Proyec Images 2 /Artisticaa 6.jpeg',
    title: 'Forja Decorativa',
    description: 'Elemento ornamental con acabado envejecido',
    category: 'Forja Artística'
  },
  {
    id: 'artistic-detail',
    url: '/Images/Artistica/Artistica.jpeg',
    title: 'Detalle Artístico',
    description: 'Trabajo detallado en forja tradicional',
    category: 'Forja Artística'
  },
  {
    id: 'artistic-modern',
    url: '/Images/Artistica/Artistica 4.jpeg',
    title: 'Diseño Moderno',
    description: 'Combinación de forja tradicional con diseño contemporáneo',
    category: 'Forja Artística'
  },
  {
    id: 'artistic-iron',
    url: '/Images 3 /Hierro (Artistica).jpeg',
    title: 'Elemento de Hierro',
    description: 'Pieza artística fabricada en hierro con diseño único',
    category: 'Forja Artística'
  },
  {
    id: 'artistic-table',
    url: '/Images 3 /Mesa (Artistica).jpeg',
    title: 'Mesa Artística',
    description: 'Mesa decorativa con base de diseño artístico en metal',
    category: 'Forja Artística'
  },
  {
    id: 'artistic-steel-table',
    url: '/Images 3 /Mesa acero (artistica).jpeg',
    title: 'Mesa de Acero',
    description: 'Mesa con estructura de acero y diseño contemporáneo',
    category: 'Forja Artística'
  },
  {
    id: 'artistic-chair',
    url: '/Images 3 /Silla (Artistica).jpeg',
    title: 'Silla Artística',
    description: 'Silla con estructura metálica y diseño personalizado',
    category: 'Forja Artística'
  },
  {
    id: 'artistic-custom-door',
    url: '/Images 3 /Puerta personalizada (Forja Artistica).jpeg',
    title: 'Puerta Personalizada',
    description: 'Puerta con diseño exclusivo y elementos decorativos artesanales',
    category: 'Forja Artística'
  },
  {
    id: 'artistic-stair-railing',
    url: '/Images 3 /Escalera, barandilla cristal (Forja Artistica).jpeg',
    title: 'Escalera con Barandilla de Cristal',
    description: 'Combinación elegante de forja y cristal en escalera interior',
    category: 'Forja Artística'
  },

  // Hierro Forjado
  {
    id: 'iron-railing',
    url: '/Proyec Images 2 /Barandilla hierro.jpeg',
    title: 'Barandilla de Hierro',
    description: 'Barandilla de seguridad con diseño clásico',
    category: 'Hierro Forjado'
  },
  {
    id: 'exterior-iron-door',
    url: '/Proyec Images 2 /Puerta hierro Ext.jpeg',
    title: 'Puerta de Hierro Exterior',
    description: 'Puerta de seguridad con acabados tradicionales',
    category: 'Hierro Forjado'
  },
  {
    id: 'exterior-door',
    url: '/Proyec Images 2 /Puerta ext.jpeg',
    title: 'Puerta Exterior',
    description: 'Puerta de seguridad con diseño moderno',
    category: 'Hierro Forjado'
  },
  {
    id: 'iron-railing-1',
    url: '/Images 3 /Barandilla (Forja).jpeg',
    title: 'Barandilla Forjada',
    description: 'Barandilla exterior con diseño tradicional en hierro forjado',
    category: 'Hierro Forjado'
  },
  {
    id: 'iron-railing-2',
    url: '/Images 3 /Barandilla 2 (Forja).jpeg',
    title: 'Barandilla Decorativa',
    description: 'Barandilla con elementos decorativos en hierro forjado',
    category: 'Hierro Forjado'
  },
  {
    id: 'iron-railing-3',
    url: '/Images 3 /Barandilla 3 (Forja).jpeg',
    title: 'Barandilla Exterior',
    description: 'Barandilla para terraza con diseño en hierro forjado',
    category: 'Hierro Forjado'
  },
  {
    id: 'iron-glass-railing',
    url: '/Images 3 /Barandilla Cristal (Hierro forjado ).jpeg',
    title: 'Barandilla con Cristal',
    description: 'Combinación de hierro forjado y cristal para espacios modernos',
    category: 'Hierro Forjado'
  },
  {
    id: 'iron-railing-4',
    url: '/Images 3 /Barandilla Hierro3 (Hierro Forjado).jpeg',
    title: 'Barandilla de Hierro',
    description: 'Barandilla robusta con diseño funcional en hierro forjado',
    category: 'Hierro Forjado'
  },
  {
    id: 'iron-stair-1',
    url: '/Images 3 /Escalera Hierro (Hierro Forjado).jpeg',
    title: 'Escalera de Hierro',
    description: 'Estructura de escalera fabricada en hierro forjado',
    category: 'Hierro Forjado'
  },
  {
    id: 'iron-stair-2',
    url: '/Images 3 /Escalera Hierro 2 (Hierro Forjado).jpeg',
    title: 'Escalera Interior',
    description: 'Escalera de hierro forjado para interior con diseño funcional',
    category: 'Hierro Forjado'
  },
  {
    id: 'iron-oven',
    url: '/Images 3 /Horno (Hierro Forjado).jpeg',
    title: 'Estructura para Horno',
    description: 'Soporte de hierro forjado para horno tradicional',
    category: 'Hierro Forjado'
  },
  {
    id: 'iron-door-1',
    url: '/Images 3 /Puerta (Acero Forjado).jpeg',
    title: 'Puerta de Acero Forjado',
    description: 'Puerta de seguridad con elementos decorativos forjados',
    category: 'Hierro Forjado'
  },
  {
    id: 'iron-door-2',
    url: '/Images 3 /Puerta ext (Hierro).jpeg',
    title: 'Puerta Exterior de Hierro',
    description: 'Puerta robusta para exterior con acabados en hierro',
    category: 'Hierro Forjado'
  },
  {
    id: 'iron-door-3',
    url: '/Images 3 /Puerta ext 2 (Hierro).jpeg',
    title: 'Puerta Exterior Decorativa',
    description: 'Puerta de hierro con elementos decorativos para exterior',
    category: 'Hierro Forjado'
  },
  {
    id: 'iron-door-4',
    url: '/Images 3 /Puerta Hierro.jpeg',
    title: 'Puerta de Hierro',
    description: 'Puerta tradicional fabricada en hierro con acabado clásico',
    category: 'Hierro Forjado'
  },

  // Estructuras
  {
    id: 'ceiling-structure',
    url: '/Proyec Images 2 /Techo.jpeg',
    title: 'Estructura de Techo',
    description: 'Estructura metálica para cubierta',
    category: 'Estructuras'
  },
  {
    id: 'architectural-structure',
    url: '/Images/Estructuras /Estructuras arquitectonicas.jpeg',
    title: 'Estructura Arquitectónica',
    description: 'Diseño y construcción de estructura metálica compleja',
    category: 'Estructuras'
  },
  {
    id: 'exterior-structure',
    url: '/Images/Estructuras /Exteriores 1.jpeg',
    title: 'Estructura Exterior',
    description: 'Pérgola metálica para espacio exterior',
    category: 'Estructuras'
  },
  {
    id: 'architectural-structure-2',
    url: '/Images 3 /Estrucutras arquitectonicas (Ext Arquitectonicas).jpeg',
    title: 'Estructura Arquitectónica',
    description: 'Estructura metálica para proyecto arquitectónico exterior',
    category: 'Estructuras'
  },
  {
    id: 'exterior-structure-2',
    url: '/Images 3 /Exterior (estructuras arquitectonicas).jpeg',
    title: 'Estructura para Exterior',
    description: 'Estructura metálica para espacio exterior con diseño funcional',
    category: 'Estructuras'
  },
  {
    id: 'pillar-structure',
    url: '/Images 3 /Pilar (Estructura Ext).jpeg',
    title: 'Pilar Estructural',
    description: 'Pilar metálico para soporte de estructura arquitectónica',
    category: 'Estructuras'
  },
  {
    id: 'covered-pillar',
    url: '/Images 3 /Pilar Forrado (Estructura Ext).jpeg',
    title: 'Pilar Forrado',
    description: 'Pilar estructural con revestimiento decorativo',
    category: 'Estructuras'
  },
  {
    id: 'covered-pillars',
    url: '/Images 3 /Pilares Forrados (Estructuras ext).jpeg',
    title: 'Pilares Forrados',
    description: 'Conjunto de pilares estructurales con revestimiento decorativo',
    category: 'Estructuras'
  }
];

function ProjectsPage() {
  const { isOpen, openModal, closeModal } = useImageModal();

  const handleImageClick = (index: number) => {
    const modalImages = projects.map(project => ({
      url: project.url,
      title: project.title,
      description: project.description
    }));
    openModal(modalImages, index);
  };

  // Agrupar proyectos por categoría
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  return (
    <div className="min-h-screen bg-gray-50">
      <BackToHomeButton />
      
      <section className="relative h-[70vh]">
        <div className="absolute inset-0">
          <img
            src="/Images 3 /Puerta Peatonal (Corten).jpeg"
            alt="Proyectos Destacados"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                Nuestros Proyectos
              </h1>
              <p className="text-xl text-gray-200 text-center">
                Descubre nuestra trayectoria a través de proyectos que demuestran nuestro compromiso con la excelencia y la innovación en el trabajo del metal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(groupedProjects).map(([category, categoryProjects]) => (
            <div key={category} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProjects.map((project, index) => (
                  <div 
                    key={project.id}
                    className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  >
                    <div 
                      className="relative h-64 cursor-pointer group overflow-hidden"
                      onClick={() => handleImageClick(projects.findIndex(p => p.id === project.id))}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleImageClick(projects.findIndex(p => p.id === project.id));
                        }
                      }}
                    >
                      <img
                        src={project.url}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ImageModal
        images={projects.map(project => ({
          url: project.url,
          title: project.title,
          description: project.description
        }))}
        initialIndex={0}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default ProjectsPage;