import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return <div><Link to='/pagetwo'>PageTwo</Link></div>
}

const PageTwo = () => {
  return <div><Link to='/'>PageOne</Link></div>
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={PageOne} />
          <Route path='/pagetwo' exact component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
