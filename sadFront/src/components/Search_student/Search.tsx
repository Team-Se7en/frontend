import React, { useState, useEffect } from 'react';
import { TextField, Button, CircularProgress, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import { StudentCardViewFullInfo } from "../../models/CardInfo";

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

interface SendData {
  setData: (data: StudentCardViewFullInfo[]) => void;
}

const SearchStudent: React.FC<SendData> = ({ setData }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<StudentCardViewFullInfo[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchSearchResults();
    }, 300); 

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const fetchSearchResults = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(`https://seven-apply.liara.run/eduportal/positions?search=${query}`);
      const data: StudentCardViewFullInfo[] = await response.json();

      if (data && data.length > 0) {
        setData(data);
        setResults(data);
      } else {
        setResults([]);
      }
    } catch (error) {
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
  };

  return (
    <SearchContainer>
      <TextField
        style={{ width: '60%', marginLeft: '78px' }}
        label="Search"
        variant="outlined"
        value={query}
        onChange={handleInputChange}
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
              <SearchButton variant="contained" onClick={fetchSearchResults} disabled={loading}>
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
}

export default SearchStudent;
