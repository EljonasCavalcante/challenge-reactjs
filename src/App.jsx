import React, { useState } from 'react';
import Challenge01 from './components/Challenges/Challenge01';

const App = () => {
  const [showChallenge, setShowChallenge] = useState(false);

  function handleClick() {
    setShowChallenge((prevMostrar) => !prevMostrar);
  }

  return (
    <>
      <button onClick={handleClick}>Desafio 01 useState &#128509; </button>
      {showChallenge && <Challenge01 />}
    </>
  );
};

export default App;
