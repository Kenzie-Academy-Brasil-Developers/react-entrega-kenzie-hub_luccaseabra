import './App.css'
import AppRoutes from './routes'
import GlobalStyles from './styles/GlobalStyles'
import Reset from './styles/Reset'

import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <AppRoutes />

      <ToastContainer />
    </>

  )
}

export default App;
