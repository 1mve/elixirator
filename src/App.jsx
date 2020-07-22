import React from 'react';
import Autocomplete from './components/Autocomplete';
import { LIST } from './constants/list';

const SUGGESTIONS_LIMIT = 15;

const App = () => {
  return (
    <div className="app">
      <Autocomplete list={LIST} limit={SUGGESTIONS_LIMIT} />
    </div>
  );
}

export default App;
