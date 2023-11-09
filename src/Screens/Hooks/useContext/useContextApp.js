// App.js

import React from 'react';
import {ThemeProvider} from './useContext';
import HomeScreen from './useContextHome';

export default function App() {
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  );
}
