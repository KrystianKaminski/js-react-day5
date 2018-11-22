import React from 'react';

import Counter from './Counter'
import Form from './Form';

const App = () => (
  <div>
    <Counter
      startValue={5}
      min={-3}
      max={3}
    />
    <Counter/>
    <Form/>
  </div>
)

export default App;
