import React from 'react'
import { useState } from 'react'
import "./DateOfBirth.css"

const DateOfBirth = (props) => {
 
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const {allInfo2} = props

  return (
    <div className='central'>
      <div className='grayito3'>
        <h1>Cuál es tu fecha de nacimiento?</h1>
           
          <div>
            <input  placeholder='Dia' value={day}
            onChange = {(event)=> setDay(event.target.value)}/>
            
          </div>
           
          <div>
            <input placeholder='Mes' value={month}
            onChange = {(event)=> setMonth(event.target.value)}/>
          </div>
          
           
          <div>
            <input placeholder='Año' value={year}
            onChange = {(event)=> setYear(event.target.value)}/>
          </div>
           
          <button className='button2' onClick={()=> allInfo2({day,month,year})}>Enviar</button>
      </div>
      <div className='info2'>{day} {month} {year}</div>

  
    </div>
  )
}

export default DateOfBirth