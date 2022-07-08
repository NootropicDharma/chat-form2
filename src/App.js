import logo from './logo.svg';
import './App.css';
import ContactInfo from './components/ContactInfo';
import DateOfBirth from './components/DateOfBirth';
import Name from './components/Name';
import { useState } from 'react';
import axios from 'axios'; 

function App(props) {
 const [newinfo, setNewInfo] = useState({})
 const [newinfo2, setNewInfo2] = useState({})
 const [newinfo3, setNewInfo3] = useState ({})
 const [datos, setDatos] = useState (false)
 const [statey, setStatey] = useState ({})
 console.log("1", newinfo)
 console.log("here", newinfo2)
 console.log("here3", newinfo3)

 
 function allInfo(info) {
   setNewInfo(info)
  }
  function allInfo2(info) {
    setNewInfo2(info)
  }
  function allInfo3(info) {
    setNewInfo3(info)
  }
  

  
    const ally = {...newinfo,...newinfo2,...newinfo3}
    console.log("everything", ally)
  
  
 
  
  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:5005/api/users", {name: ally.name,
    secondName: ally.secondName,
    lastName: ally.lastName,
    maidenName: ally.maidenName,
    day: ally.day,
    month: ally.month,
    year: ally.year,
    email: ally.email,
    cellphone: ally.cellphone
    })
      .then(datos => console.log(datos))
      .catch(error => console.log(error))
  }
 
  
  const datosNuevos = "si tus datos son correctos por favor continuemos"

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className='central'>
          <Name allInfo={allInfo}/>
          {newinfo.name && newinfo.lastName && newinfo.maidenName? <DateOfBirth allInfo2={allInfo2}/> : <></>}
          {newinfo2.day && newinfo2.month && newinfo2.year? <ContactInfo allInfo3={allInfo3}/> : <></>}
          {newinfo3.cellphone && newinfo3.email? datosNuevos : <></>}
          {newinfo.name && newinfo.lastName? <button type='submit' onClick={(e)=> setDatos(true)}>Iniciar</button> : <></>}
        
        
              {datos&&
                <div  className="toda">
                  <div>
                    {newinfo.name} {newinfo.lastName} {newinfo.maidenName}
                  </div>
                  <div>
                     {newinfo2.day} {newinfo2.month} {newinfo2.year}
                  </div>
                  <div>
                    {newinfo3.cellphone} {newinfo3.email}
                  </div>
              
                </div>
              }
        
        
        </div>
      </form>
      
    </div>
  );
}

export default App;
