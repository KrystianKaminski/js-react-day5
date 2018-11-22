import React from 'react';

import Counter from './Counter'

const App = () => (
  <div>
    <Counter
      startValue={5}
      min={-3}
      max={3}
    />
  </div>
)

export default App;
