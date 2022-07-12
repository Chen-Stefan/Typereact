import React from 'react';
import './App.css';

// Conventional props 
function Header({title}: {title: string}) {
  return(
    <h1>{title}</h1>
  )
}

function App() {
  return (
    <div>
      <Header title={'hello'}></Header>
    </div>
  );
}

export default App;
