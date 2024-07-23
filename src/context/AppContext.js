// AppContext.js
import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [storiesCompleted, setStoriesCompleted] = useState(false);

  return (
    <AppContext.Provider value={{ storiesCompleted, setStoriesCompleted }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
