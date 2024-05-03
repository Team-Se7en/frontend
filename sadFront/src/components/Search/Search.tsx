import React, { useState } from 'react';
import { TextField, Button, CircularProgress, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';


interface SearchResult {
  id: number;
  name: string;
  // Add more fields as needed
}

const SearchContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

const SearchButton = styled(Button)({
  marginLeft: '8px',
});

const HighlightedText = styled('span')({
  fontWeight: 'bold',
});
const SearchResultList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: '16px 0',
});
const SearchResultItem = styled('li')({
  padding: '8px',
  borderRadius: '4px',
  backgroundColor: '#f0f0f0',
  marginBottom: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
const ErrorMessage = styled('p')({
  color: 'red',
});

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState<string>('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    // Mock API call
    try {
      const response = await axios.get(`https://api.example.com/search?q=${query}`);
      setResults(response.data.results);
      if (response.data.results.length === 0) {
        setError('No results found.');
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      setError('An error occurred while fetching search results.');
    } finally {
      setLoading(false);
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };


  return (
    <SearchContainer>
      <TextField
      style={{width:'900px'}}
        label="Search"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        InputProps={{
          endAdornment: (
            <SearchButton variant="contained" onClick={handleSearch} disabled={loading}>
              {loading ? <CircularProgress size={24} color="inherit" /> : <SearchIcon />}
            </SearchButton>
          ),
        }}
      />
      {loading && <CircularProgress />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {results.length > 0 && (
        <SearchResultList>
      {results.map((result) => (
        <SearchResultItem key={result.id}>
          {/* Highlighted text */}
          <HighlightedText>{result.name}</HighlightedText>
          </SearchResultItem>
          ))}
          </SearchResultList>
        )}
    </SearchContainer>
  );
};

export default Search;
