import React, { useState, useEffect } from 'react';
import { trackPageView, trackSearch, trackButtonClick } from '../utils/analytics';

const mockResults = [
  { id: 1, title: 'Tennis Lessons for Beginners', type: 'program' },
  { id: 2, title: 'Advanced Tennis Techniques', type: 'article' },
  { id: 3, title: 'Tennis Court Booking', type: 'service' },
  { id: 4, title: 'Tennis Equipment Guide', type: 'article' },
];

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<typeof mockResults>([]);

  useEffect(() => {
    trackPageView('/search', 'Search - Ace Tennis Academy');
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    trackSearch(searchTerm);
    trackButtonClick('search_button', 'search-submit');
    
    // Simulate search results
    const filteredResults = mockResults.filter(result =>
      result.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div className="search-page">
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for programs, articles, or services..."
            required
          />
          <button type="submit">Search</button>
        </div>
      </form>

      {results.length > 0 ? (
        <div className="search-results">
          <h2>Search Results</h2>
          <ul>
            {results.map((result) => (
              <li key={result.id}>
                <h3>{result.title}</h3>
                <span className="result-type">{result.type}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : searchTerm && (
        <p>No results found for "{searchTerm}"</p>
      )}
    </div>
  );
};

export default Search; 