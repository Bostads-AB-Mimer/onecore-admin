import React from 'react'
import { Input } from './ui/input.tsx'

export default function SearchBar() {
  const handleSearch = (event) => {
    // Implementera söklogik här
    console.log('Söker efter:', event.target.value)
  }

  return (
    <Input
      className="mb-4"
      placeholder="Sök lägenheter..."
      onChange={handleSearch}
    />
  )
}
