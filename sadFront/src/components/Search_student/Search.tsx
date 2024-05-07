import React, { useState, useEffect } from 'react';
import { TextField, Button, CircularProgress, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';

const SearchContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

const SearchButton = styled(Button)({
  marginLeft: '8px',
  backgroundColor: '#00004b',
});

const ErrorMessage = styled('p')({
  color: 'red',
});

const SearchStudent: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState<string>('');

  const handleSearchDebounced = () => {
    setLoading(true);
    setError('');

    fetchSearchResults();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchDebounced();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  

  const handleClear = () => {
    setQuery('');
  };

  useEffect(() => {
    fetchSearchResults();
  }, []);

  const fetchSearchResults = async () => {
    try {
      const response = await fetch('https://seven-apply.liara.run/eduportal/professors');
      const data = await response.json();

      // Filter the data based on the query
      const filteredResults = data.filter((item: any) =>
        Object.values(item.user).some((value: any) =>
          typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase())
        )
      );
      console.log(filteredResults)

      // Set the filtered results to the state
      setResults(filteredResults);
    } catch (error) {
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchContainer>
      <TextField
        style={{ width: '60%', marginLeft: '78px' }} // Responsive width
        label="Search"
        variant="outlined"
        value={query}
        onChange={handleInputChange}
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
              <SearchButton variant="contained" onClick={handleSearchDebounced} disabled={loading}>
                {loading ? <CircularProgress size={24} color="inherit" /> : <SearchIcon />}
              </SearchButton>
            </React.Fragment>
          ),
        }}
      />
      {loading && <CircularProgress />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!results.length && query && (
        <ErrorMessage>No results found.</ErrorMessage>
      )}
    </SearchContainer>
  );
};

export default SearchStudent;
