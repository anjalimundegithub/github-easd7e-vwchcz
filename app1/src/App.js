import React, { Suspense } from 'react';
import Button from './Button';
const RemoteApp = React.lazy(() => import('app2/App'));

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>App1</h1>
        <Button />
      </div>
      <Suspense fallback={'loading...'}>
        <p> Serving from app 1</p>
        <RemoteApp />
      </Suspense>
    </div>
  );
};

export default App;
