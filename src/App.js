import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/sign-up' element={<SignupPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
