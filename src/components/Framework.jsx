import Link from 'next/link'
import { getProperties, getApartments, searchApartments } from '../data/db'

const properties = getProperties()
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import {
  BuildingIcon,
  HomeIcon,
  LayoutPanelLeftIcon,
  PanelLeftIcon,
  SearchIcon,
} from 'lucide-react'

export default function Framework({ children }) {
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (event) => {
    const query = event.target.value
    const results = searchApartments(query)
    setSearchResults(results)
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted">
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
              {searchResults.length > 0 && (
                <div className="absolute z-10 mt-2 w-full bg-white shadow-lg">
                  <ul>
                    {searchResults.map((apartment) => (
                      <li key={apartment.id} className="p-2 hover:bg-gray-200">
                        <Link
                          href={`/apartments/${apartment.propertyId}-${apartment.number}`}
                        >
                          {apartment.number} - {apartment.address},{' '}
                          {apartment.city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-64 bg-content text-content-foreground">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-header px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeftIcon className="h-5 w-5" />
                <span className="sr-only">Växla Meny</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  prefetch={false}
                >
                  <BuildingIcon className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Fastigheter</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <HomeIcon className="h-5 w-5" />
                  Fastigheter
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <LayoutPanelLeftIcon className="h-5 w-5" />
                  Våningar
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <HomeIcon className="h-4 w-4 mr-2" />
                  Lägenheter
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="relative ml-auto flex-1 md:grow-0">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Sök i OneCore..."
              className="w-full rounded-lg bg-input pl-8 md:w-[200px] lg:w-[336px]"
              onChange={handleSearch}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full bg-button"
              >
                <SearchIcon className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Mitt Konto</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Inställningar</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logga ut</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-2 bg-main">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
