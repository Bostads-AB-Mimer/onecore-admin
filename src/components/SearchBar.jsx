import React, { useState, useRef, useEffect } from 'react'
import { getApartments, getProperties } from '@/data/db'
import { Apartment, Property } from '@/types/property'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { HomeIcon, BuildingIcon } from 'lucide-react'

export default function SearchBar() {
  const properties = getProperties()
  const apartments = getApartments()

  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.metaKey && event.key === 'k') {
        event.preventDefault()
        setIsSearchVisible(true)
        searchRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="relative w-full max-w-md">
      <Command className="rounded-lg border shadow-md w-full">
        <CommandInput
          placeholder="Sök i OneCore... (⌘K)"
          className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
          onFocus={() => setIsSearchVisible(true)}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            setIsSearchVisible(true)
          }}
        />
        <CommandList
          ref={searchRef}
          className={`absolute z-10 mt-12 w-full rounded-lg border bg-white shadow-lg ${
            isSearchVisible ? 'block' : 'hidden'
          }`}
        >
          <CommandEmpty>Inga sökträffar</CommandEmpty>
          <CommandGroup heading="Lägenheter">
            {apartments?.map((apartment) => (
              <a
                key={apartment.id}
                href={`/apartments/${apartment.propertyId}-${apartment.id}`}
              >
                <CommandItem>
                  <HomeIcon className="mr-2 h-4 w-4" />
                  <span>
                    {apartment.id} - {apartment.address}, {apartment.city}
                  </span>
                </CommandItem>
              </a>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Fastigheter">
            {properties?.map((property) => (
              <CommandItem key={property.id}>
                <BuildingIcon className="mr-2 h-4 w-4" />
                <span>
                  {property.name} - {property.address}
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  )
}
