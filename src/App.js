import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import Header from './components/Header';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/sign-up' element={<SignupPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
