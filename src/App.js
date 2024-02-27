import React from 'react';
import { GlobalStyles } from './style/GlobalStyles';
import Router from './Router';
import { RecoilRoot } from 'recoil';
function App() {
  return (
    <>
      <GlobalStyles />
      <div className="app-container">
        <Router />
      </div>
    </>
  );
}

export default App;
