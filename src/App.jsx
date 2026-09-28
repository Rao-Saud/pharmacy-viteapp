import './App.css'
import NavigationBar from './My_components/navigation_bar';
import { Navigate, Route , Routes} from 'react-router-dom'
import AboutUs from './pages/About_us';
import ContactUs from './pages/Contact_us';
import Homepage from './pages/homepage';


function App() {

  return (
    <>
      <NavigationBar />
      
      <Routes>
        <Route path="/" element={<Navigate to="/pages/homepage" />} />
        <Route path="pages/homepage" element={<Homepage />} />
        <Route path="pages/About_us" element={<AboutUs />} />
        <Route path="pages/Contact_us" element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App
