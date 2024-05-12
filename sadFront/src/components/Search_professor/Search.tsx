import { Button, CircularProgress, TextField, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';

import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

interface SearchResult {
  id: number;
  name: string;
}

const SearchContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor:'white',
  width: '40%',
  marginBottom:'10px',
  borderRadius:'8px'
});

const SearchButton = styled(Button)({
  marginLeft: '8px',
  backgroundColor: '#00004b',
  borderRadius:'8px'

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
  borderRadius: '8px',
  backgroundColor: '#f0f0f0',
  marginBottom: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ErrorMessage = styled('p')({
  color: 'red',
});

const SearchProfessor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]); // اینجا interface SearchResult برداشته شده است
  const [error, setError] = useState<string>('');
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`https://seven-apply.liara.run/eduportal/?q=${query}`); // اینجا آدرس API واقعی خودتان را قرار دهید
      setResults(response.data);
      if (response.data.length === 0) {
        setError('No results found.');
      } else {
        setError('');
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

  const handleClear = () => {
    setQuery('');
  };

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    if (query.trim() !== '') {
      setTimer(setTimeout(handleSearch, 500));
    } else {
      setResults([]);
      setError('');
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [query, timer]);

  return (
    <SearchContainer>
      <TextField
        style={{width:'100%'}} // Responsive width
        label="Search"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        InputProps={{
          endAdornment: (
            <React.Fragment>
              {query && (
                <IconButton edge="end" aria-label="clear" onClick={handleClear} size="small">
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
      {results.length > 0 && !loading && (
        <SearchResultList>
          {results.map((result: any) => ( // اینجا هم نوع داده تغییر کرده است
            <SearchResultItem key={result.id}>
              <HighlightedText>{result.name}</HighlightedText>
            </SearchResultItem>
          ))}
        </SearchResultList>
      )}
    </SearchContainer>
  );
};

export default SearchProfessor;
