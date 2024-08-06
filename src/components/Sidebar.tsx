import { useState, useEffect } from 'react'
import { BuildingIcon, HomeIcon } from 'lucide-react'
import { getProperties } from '@/data/db'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Sidebar({ selectedApartment }) {
  const properties = getProperties()
  const [selectedProperty, setSelectedProperty] = useState<string | null>(
    'property-' + selectedApartment?.propertyId
  )

  useEffect(() => {
    if (properties.length > 0) {
      setSelectedProperty(`property-${properties[0].id}`)
    }
  }, [properties])

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-sidebar lg:flex">
      <nav className="flex flex-col gap-4 px-4 py-6">
        <a
          href="/#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <BuildingIcon className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Mimer</span>
        </a>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          value={selectedProperty}
          onValueChange={setSelectedProperty}
        >
          {properties?.map((property) => (
            <AccordionItem key={property.id} value={`property-${property.id}`}>
              <AccordionTrigger>{property.address}</AccordionTrigger>
              <AccordionContent>
                <Accordion
                  type="multiple"
                  defaultValue={property.floors.map(
                    (floor) => `floor-${floor.id}`
                  )}
                >
                  {property.floors.map((floor) => (
                    <AccordionItem key={floor.id} value={`floor-${floor.id}`}>
                      <AccordionTrigger>{floor.name}</AccordionTrigger>
                      <AccordionContent>
                        {floor.apartments.map((apartment) => (
                          <a
                            key={apartment.id}
                            href={`/apartments/${property.id}-${apartment.id}`}
                            className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium hover:bg-muted"
                          >
                            <HomeIcon className="h-4 w-4" />
                            <span>{apartment.id}</span>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </nav>
    </aside>
  )
}
