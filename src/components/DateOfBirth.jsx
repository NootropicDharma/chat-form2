import React from 'react'
import { useState } from 'react'
import "./DateOfBirth.css"

const DateOfBirth = (props) => {
 
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const {allInfo} = props

  return (
    <div className='central'>
      <div className='grayito3'>
        <h1>what's your Date of birth?</h1>
            <form>
          <input placeholder='Day' value={day}
          onChange = {(event)=> setDay(event.target.value)}/>
            </form>
            <form>
          <input placeholder='Month' value={month}
          onChange = {(event)=> setMonth(event.target.value)}/>
            </form>
            <form>
          <input placeholder='Year' value={year}
          onChange = {(event)=> setYear(event.target.value)}/>
            </form>
          <button onClick={()=> allInfo({day,month,year})}></button>
      </div>
      <div className='info2'>{day} {month} {year}</div>

  
    </div>
  )
}

export default DateOfBirth