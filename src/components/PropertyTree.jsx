// src/components/PropertyTree.jsx
import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './ui/accordion.tsx'

export default function PropertyTree({ properties }) {
  const handleApartmentSelect = (apartment) => {
    window.dispatchEvent(
      new CustomEvent('apartmentSelected', { detail: apartment })
    )
  }

  const renderFloors = (floors) =>
    floors.map((floor) => (
      <AccordionItem key={floor.id} value={`floor-${floor.id}`}>
        <AccordionTrigger>{floor.name}</AccordionTrigger>
        <AccordionContent>
          {floor.apartments.map((apartment) => (
            <div
              key={apartment.id}
              className="cursor-pointer hover:bg-gray-100 p-1"
              onClick={() => handleApartmentSelect(apartment)}
            >
              Lägenhet {apartment.number}
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    ))

  return (
    <Accordion type="multiple" className="mt-4">
      {properties.map((property) => (
        <AccordionItem key={property.id} value={`property-${property.id}`}>
          <AccordionTrigger>{property.name}</AccordionTrigger>
          <AccordionContent>
            <Accordion type="multiple">
              {renderFloors(property.floors)}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
