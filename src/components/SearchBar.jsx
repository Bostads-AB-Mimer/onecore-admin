import React, { useState } from 'react';
import { Input } from './ui/input.tsx';
import { searchApartments } from '@/data/db';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setQuery(query);
    const searchResults = searchApartments(query);
    setResults(searchResults);
  };

  return (
    <div>
      <Input
        className="mb-4"
        placeholder="Sök lägenheter..."
        onChange={handleSearch}
      />
      {query && (
        <div className="absolute z-10 mt-2 w-full bg-white shadow-lg">
          {results.length > 0 ? (
            <ul>
              {results.map((apartment) => (
                <li key={apartment.id} className="p-2 hover:bg-gray-200">
                  {apartment.number} - {apartment.address}, {apartment.city}
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-2">Inga resultat hittades</p>
          )}
        </div>
      )}
    </div>
  );
}
