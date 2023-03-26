import React from 'react';
import SearchForm from "./components/SearchForm";



function App() {
  const handleSearch = async (search: string) => {
    await fetch(`/?search=${search}`);
  };

  return (
   <SearchForm onSearch={handleSearch} />
  );
}

export default App;
