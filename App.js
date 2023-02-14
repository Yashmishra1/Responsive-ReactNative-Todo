import React, { useEffect } from 'react';
import Navigation from './src/navigation/Navigator';
import configureStore from './src/store/configureStore';
import { Provider } from 'react-redux'
import notifee from '@notifee/react-native';
import { store } from './src/store';
async function createUserChannel() {
  await notifee.requestPermission()
  await notifee.createChannel({
    id: 'TODO',
    name: 'TODO',
  });
}

const App = () => {
  useEffect(() => {
    createUserChannel()
  },[])
  return (
    // <Provider store={configureStore}>
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
export default App;
