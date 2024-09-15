import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footers';
import './components/styles/Header.css';
import { Home, Login } from '@mui/icons-material';
import Register from './components/Register';

const App: React.FC = () => {

  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;