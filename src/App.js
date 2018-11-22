import React from 'react';

import Counter from './Counter'

const App = () => (
  <div>
    <Counter
      startValue={5}
      min={-3}
      max={3}
    />
    <Counter/>
  </div>
)

export default App;
