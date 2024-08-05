import React, { useState } from 'react';
import { Input } from './ui/input.tsx';
import { searchApartments } from '@/data/db';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    const searchResults = searchApartments(event.target.value);
    setResults(searchResults);
  };

  return (
    <div>
      <Input
        className="mb-4"
        placeholder="Sök lägenheter..."
        onChange={handleSearch}
      />
      <div>
        {results.length > 0 ? (
          <ul>
            {results.map((apartment) => (
              <li key={apartment.id}>
                {apartment.number} - {apartment.address}, {apartment.city}
              </li>
            ))}
          </ul>
        ) : (
          query && <p>Inga resultat hittades</p>
        )}
      </div>
    </div>
  );
}
