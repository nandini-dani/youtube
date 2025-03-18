import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import appStore from './utils/appStore';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

/**head
body 
sidebar
  menuitems
main container 
   button list 
   video card */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Body></Body>,
    children: [
      { path: '/', element: <MainContainer /> },
      { path: '/watch', element: <WatchPage /> },
    ],
  },
]);
function App() {
  return (
    <Provider store={appStore}>
      <Head></Head>
      <RouterProvider router={router}>
        <Body></Body>
      </RouterProvider>
    </Provider>
  );
}

export default App;
