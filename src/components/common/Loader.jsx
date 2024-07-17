import React from 'react';

const SpinningLoader = () => (
  <div className="flex items-center justify-center h-screen bg-background dark:bg-background-dark">
    <div className="animate-spin rounded-full h-32 w-32 border-l-8 border-t-8 border-primary"></div>
  </div>
);

export default SpinningLoader;
