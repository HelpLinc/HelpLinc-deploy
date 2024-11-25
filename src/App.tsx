import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import AboutUs from './pages/About';
import ContactForm from './pages/Contact';
import FrequentlyAskedQuestions from './components/FAQ';
import ServicesPage from './pages/Services';
import GetStartedPage from './pages/GetStarted';
import Login from './components/UserAuthentication/Login';
import Register from './components/UserAuthentication/UserRegister';
import UserDashboard from './pages/UserDashboard';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/frequently-asked-questions' element={<FrequentlyAskedQuestions />} />

        <Route path='get-started' element={<GetStartedPage />} />
        <Route path='/user-register' element={<Register /> } />
        <Route path='/login' element={<Login />} />
        <Route path='/user-dashboard' element={<UserDashboard />} />
        </Routes>
    </Router>
  )
}

export default App
