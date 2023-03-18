import React from 'react';



import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Traffics from './pages/traffics';

import { BrowserRouter as  Switch, Route } from "react-router-dom";


// import NxWelcome from './nx-welcome';

export function App() {
  // fetch('http://localhost:8080/api/addresses').then(console.log).catch(console.error);
  return (
    <>
      {/* <NxWelcome title="frontend" /> */}
      <Header />
        <Sidebar />
        <Traffics />
      </>
  );
}
export default App;
