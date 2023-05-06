import logo from './logo.svg';
import './App.css';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import 'rsuite/dist/rsuite.min.css';
import { useSelector } from 'react-redux';
// import 'rsuite/dist/rsuite.min.css';
// import Sidebar from './Components/Sidebar';
import SideNavbar from './Components/Sidebar';
import AllRoutes from './Components/AllRoutes';

function App() {
  const contacts = useSelector(state => state.contact);
  console.log("contacts app",contacts)

  return (
    <div className="App">
      <SideNavbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
