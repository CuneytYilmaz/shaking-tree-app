import React from 'react';
import Tree from '../components/Tree';
import Basket from '../components/Basket';
import Nav from '../components/Nav';

function App() {
  return (
    <div className='App'>
      <Nav />
      <hr className='hr-line-color' />
      <Tree />
      <Basket />
    </div>
  );
}

export default App;