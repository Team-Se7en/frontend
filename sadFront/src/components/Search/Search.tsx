import React, { useState, useEffect } from 'react';
import { TextField, Button, CircularProgress, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

interface SearchResult {
  id: number;
  name: string;
}

const SearchContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

const SearchButton = styled(Button)({
  marginLeft: '8px',
  backgroundColor: '#00004b',
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

const Underline = styled('div')({
  width: '60%',
  borderBottom: '2px solid white', // Change the color or size as needed
  marginBottom: '16px',
});

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError('');
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
    setIsTyping(true);
    if (event.key === 'Enter') {
      handleSearch();
    }
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        setIsTyping(false);
        handleSearch();
      }, 500)
    );
  };

  const handleClear = () => {
    setQuery('');
    setIsTyping(false);
    if (timer) {
      clearTimeout(timer);
    }
  };

  useEffect(() => {
    if (timer) {
      return () => {
        clearTimeout(timer);
      };
    }
  }, [timer]);

  return (
    <SearchContainer>
      <TextField
        style={{width:'60%',marginLeft:'78px'}} // Responsive width
        label="Search"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        InputProps={{
          endAdornment: (
            <React.Fragment>
              {query && (
                <IconButton
                  edge="end"
                  aria-label="clear"
                  onClick={handleClear}
                  size="small"
                >
                  <ClearIcon />
                </IconButton>
              )}
              <SearchButton variant="contained" onClick={handleSearch} disabled={loading}>
                {loading ? <CircularProgress size={24} color="inherit" /> : <SearchIcon />}
              </SearchButton>
            </React.Fragment>
          ),
        }}
      />
      {loading && <CircularProgress />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {isTyping && !results.length && (
        <Underline />
      )}
      {results.length > 0 && (
        <SearchResultList>
          {results.map((result) => (
            <SearchResultItem key={result.id}>
              <HighlightedText>{result.name}</HighlightedText>
            </SearchResultItem>
          ))}
        </SearchResultList>
      )}
      {!results.length && !isTyping && query && (
        <ErrorMessage>No results found.</ErrorMessage>
      )}
    </SearchContainer>
  );
};

export default Search;
