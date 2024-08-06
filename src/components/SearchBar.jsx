import React, { useState, useRef, useEffect } from 'react'
import { Input } from './ui/input'
import { searchApartments } from '@/data/db'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { HomeIcon, BuildingIcon, LayoutPanelLeftIcon } from 'lucide-react'
import Link from 'next/link'

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState({
    apartments: [],
    properties: [],
    floors: [],
  })
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const searchRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [searchRef])

  const handleSearch = (query) => {
    setSearchQuery(query)
    if (query) {
      const results = searchApartments(query)
      setSearchResults({
        apartments: results.filter((result) => result.type === 'apartment'),
        properties: results.filter((result) => result.type === 'property'),
        floors: results.filter((result) => result.type === 'floor'),
      })
    } else {
      setSearchResults({ apartments: [], properties: [], floors: [] })
    }
  }

  return (
    <Command className="relative rounded-lg border shadow-md w-full max-w-md">
      <CommandInput
        placeholder="Sök i OneCore..."
        onValueChange={handleSearch}
        className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
        onFocus={() => setIsSearchVisible(true)}
      />
      <CommandList
        ref={searchRef}
        className={isSearchVisible ? 'block' : 'hidden'}
      >
        {searchQuery ? (
          <>
            <CommandGroup heading="Lägenheter">
              {searchResults.apartments?.map((apartment) => (
                <Link
                  key={apartment.id}
                  href={`/apartments/${apartment.propertyId}-${apartment.id}`}
                >
                  <CommandItem>
                    <HomeIcon className="mr-2 h-4 w-4" />
                    <span>
                      {apartment.number} - {apartment.address}, {apartment.city}
                    </span>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Fastigheter">
              {searchResults.properties?.map((property) => (
                <CommandItem key={property.id}>
                  <BuildingIcon className="mr-2 h-4 w-4" />
                  <span>{property.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Våningar">
              {searchResults.floors?.map((floor) => (
                <CommandItem key={floor.id}>
                  <LayoutPanelLeftIcon className="mr-2 h-4 w-4" />
                  <span>{floor.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        ) : (
          <CommandEmpty>Inga resultat funna.</CommandEmpty>
        )}
      </CommandList>
    </Command>
  )
}
