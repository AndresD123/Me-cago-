import { useState } from 'react';

interface ServiceImage {
  url: string;
  title: string;
  description: string;
}

export function useServiceImageModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState<ServiceImage[]>([]);

  const openModal = (imageList: ServiceImage[], index: number = 0) => {
    setImages(imageList);
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    currentImageIndex,
    images,
    openModal,
    closeModal
  };
}