import logo from './logo.svg';
import './App.css';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import { useSelector } from 'react-redux';

function App() {
  const contacts = useSelector(state => state.contacts);
  return (
    <div className="App">
      <ContactForm/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
