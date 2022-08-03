import React from 'react';
import { Suspense } from 'react';
import Scene from './Components/Scene';
import Content from './Components/Content';
import './App.scss';

function App() {

  return (
    <div className="bg-green-300 w-full App flex flex-col">

      <div className="z-{-1} w-full h-screen absolute text-9xl">
        <Suspense fallback={
          <div className="loader">
              <span className="loader-block"></span>
              <span className="loader-block"></span>
              <span className="loader-block"></span>
              <span className="loader-block"></span>
              <span className="loader-block"></span>
              <span className="loader-block"></span>
              <span className="loader-block"></span>
              <span className="loader-block"></span>
              <span className="loader-block"></span>
          </div>
        }>
          <Scene />
        </Suspense>
      </div>

      <Content/>

    </div>
  );
}

export default App;
