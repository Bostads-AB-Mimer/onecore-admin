import React, { createContext, useContext, useState } from 'react';
import { Apartment } from '@/types/apartment';

interface ApartmentContextType {
  selectedApartment: Apartment | null;
  setSelectedApartment: React.Dispatch<React.SetStateAction<Apartment | null>>;
}

const ApartmentContext = createContext<ApartmentContextType | undefined>(undefined);

export const ApartmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);

  return (
    <ApartmentContext.Provider value={{ selectedApartment, setSelectedApartment }}>
      {children}
    </ApartmentContext.Provider>
  );
};

export const useApartment = () => {
  const context = useContext(ApartmentContext);
  if (!context) {
    throw new Error('useApartment must be used within an ApartmentProvider');
  }
  return context;
};
