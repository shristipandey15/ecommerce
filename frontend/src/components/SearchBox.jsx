// components/SearchBox.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate('/');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Form onSubmit={submitHandler} inline style={{ display: 'flex', flex: '1' }}>
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products"
          style={{ flex: '1', marginRight: '10px' }}
        />
        <Button 
          type="submit" 
          variant="outline-warning"
          style={{ 
            flexShrink: '0', // Prevents button from shrinking
            whiteSpace: 'nowrap' // Prevents text from wrapping
          }}
        >
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBox;
