import React from 'react';
import Navigation from './src/navigation/Navigator';
import configureStore from './src/store/configureStore';
import { Provider } from 'react-redux'
const App = () => {
  return (
    <Provider store={configureStore}>
      <Navigation />
    </Provider>
  );
};
export default App;
