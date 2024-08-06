import Link from 'next/link'
import { BuildingIcon, HomeIcon } from 'lucide-react'
import { getProperties } from '@/data/db'

const properties = getProperties()

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-sidebar lg:flex">
      <nav className="flex flex-col gap-4 px-4 py-6">
        <Link
          href="/#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          prefetch={false}
        >
          <BuildingIcon className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Mimer</span>
        </Link>
        <div className="flex-1 overflow-auto">
          <div className="grid gap-2">
            {properties.map((property) => (
              <div key={property.id}>
                <div className="text-sm font-medium text-muted-foreground">
                  {property.name}
                </div>
                {property.floors.map((floor) => (
                  <div key={floor} className="ml-4">
                    <div
                      key={floor.id}
                      className="text-sm font-medium text-muted-foreground"
                    >
                      {floor.name}
                    </div>
                    {floor.apartments.map((apartment) => (
                      <Link
                        key={apartment.id}
                        href={`/apartments/${property.id}-${apartment.id}`}
                        className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium hover:bg-muted"
                        prefetch={false}
                      >
                        <HomeIcon className="h-4 w-4" />
                        <span>Lägenhet {apartment.number}</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  )
}
