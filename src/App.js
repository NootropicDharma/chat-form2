import logo from './logo.svg';
import './App.css';
import ContactInfo from './components/ContactInfo';
import DateOfBirth from './components/DateOfBirth';
import Name from './components/Name';
import { useState } from 'react';

function App(props) {
 const [newinfo, setNewInfo] = useState({})
  function allInfo(info) {
    setNewInfo(info)
  }
  console.log(newinfo)

  return (
    <div className="App">
      <div className='central'>
        <Name allInfo={allInfo}/>
        <DateOfBirth allInfo={allInfo}/>
        <ContactInfo allInfo={allInfo}/>
        <div>{newinfo.name} {newinfo.day}
        </div>
      </div>
      

    </div>
  );
}

export default App;
